import { useNavigate, useSearchParams } from "react-router-dom";
import { productCategories } from "../data.ts";
import { useRef, useState } from "react";

const ZOOM_SIZE = 150;
const ZOOM_SCALE = 2;

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const categoryKey = searchParams.get("category");
    const subCategoryName = searchParams.get("subcategory");
    const productId = parseInt(searchParams.get("id") || "0");
    const navigate = useNavigate();

    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = imageRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    const category = productCategories[categoryKey as keyof typeof productCategories];
    let product = null;

    if (category) {
        if (!subCategoryName || subCategoryName === "all") {
            for (const sub of category.subCategories) {
                product = sub.products.find((p) => p.id === productId);
                if (product) break;
            }
        } else {
            const subCategory = category.subCategories.find((sub) => sub.name === subCategoryName);
            product = subCategory?.products.find((p) => p.id === productId) || null;
        }
    }

    if (!product) {
        return <div className="py-24 mt-16 text-center text-red-600">Product not found.</div>;
    }

    return (
        <div className="px-8 py-24">
            {/* <div className="flex flex-col lg:flex-row gap-8 h-screen"> */}
            <div className="flex flex-col lg:flex-row gap-8 lg:h-screen">
                <div className="w-full lg:w-1/2 relative">
                    <div
                        ref={imageRef}
                        className="relative w-full h-[420px] lg:h-[600px] overflow-hidden rounded-xl shadow-md"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <img
                            src={product.image || "/images/placeholder.png"}
                            alt={product.name}
                            className="w-full h-full object-contain max-h-[600px]"
                        />

                        {isHovering && (
                            <div
                                className="absolute border border-gray-400 bg-white/30 pointer-events-none"
                                style={{
                                    width: ZOOM_SIZE,
                                    height: ZOOM_SIZE,
                                    left: Math.min(Math.max(mousePos.x - ZOOM_SIZE / 2, 0), imageRef.current!.offsetWidth - ZOOM_SIZE),
                                    top: Math.min(Math.max(mousePos.y - ZOOM_SIZE / 2, 0), imageRef.current!.offsetHeight - ZOOM_SIZE),
                                    cursor: "crosshair",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    color: "#1e293b",
                                }}
                            >
                                +
                            </div>
                        )}
                    </div>

                    {isHovering && (
                        <div
                            className="absolute bg-white top-0 left-full ml-6 border border-gray-300 shadow-lg rounded-md overflow-hidden z-10"
                            style={{
                                width: ZOOM_SIZE * ZOOM_SCALE,
                                height: ZOOM_SIZE * ZOOM_SCALE,
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: `${imageRef.current!.offsetWidth * ZOOM_SCALE}px ${imageRef.current!.offsetHeight * ZOOM_SCALE}px`,
                                backgroundPosition: `-${(mousePos.x * ZOOM_SCALE) - ZOOM_SIZE}px -${(mousePos.y * ZOOM_SCALE) - ZOOM_SIZE}px`,
                            }}
                        />
                    )}
                </div>

                {/* <div className="w-full lg:w-1/2 h-full"> */}
                <div className="w-full lg:w-1/2 lg:h-full">
                    <div
                        // className="h-full overflow-y-auto pr-4 space-y-6"
                        className="space-y-6 pr-0 lg:pr-4 lg:overflow-y-auto lg:h-full"
                        style={{
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#cbd5e1 #f1f5f9'
                        }}
                    >
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-slate-800">{product.name}</h1>
                            <p className="text-slate-600">{product.description}</p>
                            {product?.description2 && <p className="text-slate-600">{product.description2}</p>}
                            {product?.description3 && <p className="text-slate-600">{product.description3}</p>}
                        </div>

                        {product?.keyBenefits && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Key Benefits</h2>
                                <ul className="list-disc list-inside text-slate-700 space-y-1">
                                    {product.keyBenefits.map((benefit: any, idx: any) => (
                                        <li key={idx}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {product?.typicalApplications && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Typical Applications</h2>
                                <ul className="list-disc list-inside text-slate-700 space-y-1">
                                    {product.typicalApplications.map((typical: any, idx: any) => (
                                        <li key={idx}>{typical}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product?.technicalSpecifications && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Technical Specifications</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-slate-300 text-sm text-left rounded-lg overflow-hidden">
                                        <tbody>
                                            {Object.entries(product.technicalSpecifications).map(([key, value], idx) => (
                                                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                    <td className="font-medium p-3 w-1/2 bg-slate-100 text-slate-700">{key}</td>
                                                    <td className="p-3">
                                                        {key === "Operating Temperature" ? (
                                                            <span dangerouslySetInnerHTML={{ __html: String(value) }} />
                                                        ) : (
                                                            String(value)
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {product?.standardSizes && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Standard Sizes</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-slate-300 text-sm text-center rounded-lg overflow-hidden">
                                        <thead className="bg-slate-200">
                                            {product?.standardSizes?.[0]?.Common_Sizes ? (
                                                <tr>
                                                    <th className="p-3 font-semibold text-slate-700">Diameter</th>
                                                    <th className="p-3 font-semibold text-slate-700" colSpan={2}>Common Sizes (OD)</th>
                                                </tr>
                                            ) : product?.standardSizes?.[0]?.description ? (
                                                <tr>
                                                    <th className="p-3 font-semibold text-slate-700">Size</th>
                                                    <th className="p-3 font-semibold text-slate-700" colSpan={2}>Typical Plate Types</th>
                                                </tr>
                                            ) : product?.standardSizes?.[0]?.height ? (
                                                <tr>
                                                    <th className="p-3 font-semibold text-slate-700">Size</th>
                                                    <th className="p-3 font-semibold text-slate-700">Diameter</th>
                                                    <th className="p-3 font-semibold text-slate-700">Height</th>
                                                </tr>
                                            ) : product?.standardSizes?.[0]?.bagDepth ? (
                                                <tr>
                                                    <th className="p-3 font-semibold text-slate-700">Vessel Diameter</th>
                                                    <th className="p-3 font-semibold text-slate-700" colSpan={2}>Bag Depth (Typical)</th>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <th className="p-3 font-semibold text-slate-700">Size</th>
                                                    <th className="p-3 font-semibold text-slate-700">Diameter</th>
                                                    <th className="p-3 font-semibold text-slate-700">Length</th>
                                                </tr>
                                            )}
                                        </thead>

                                        <tbody>
                                            {product?.standardSizes?.map((size: any, idx: number) => (
                                                size?.Common_Sizes ? (
                                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                        <td className="p-3 font-semibold">{size?.diameter}</td>
                                                        <td className="p-3" colSpan={2}>{size?.Common_Sizes}</td>
                                                    </tr>
                                                ) : size?.description ? (
                                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                        <td className="p-3 font-semibold">{size?.size}</td>
                                                        <td className="p-3" colSpan={2}>{size?.description}</td>
                                                    </tr>
                                                ) : size?.height ? (
                                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                        <td className="p-3">{size?.size}</td>
                                                        <td className="p-3">{size?.diameter}</td>
                                                        <td className="p-3">{size?.height}</td>
                                                    </tr>
                                                ) : size?.bagDepth ? (
                                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                        <td className="p-3">{size?.diameter}</td>
                                                        <td className="p-3" colSpan={2}>{size?.bagDepth}</td>
                                                    </tr>
                                                ) : (
                                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                        <td className="p-3">{size?.size}</td>
                                                        <td className="p-3">{size?.diameter}</td>
                                                        <td className="p-3">{size?.length}</td>
                                                    </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}


                        {product?.customOptions && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Custom Options</h2>
                                <p className="text-slate-600 leading-relaxed">{product.customOptions}</p>
                            </div>
                        )}

                        <div className="flex gap-4 justify-center pt-4">
                            <a href="tel:+917990650121">
                                <button className="text-white font-semibold py-3 px-8 rounded-full transition bg-[#ec4a0a] hover:brightness-90 hover:shadow-lg transform hover:scale-105 duration-200">
                                    Call Us Now
                                </button>
                            </a>

                            <button onClick={() => navigate('/contact')} className="text-white font-semibold py-3 px-8 rounded-full transition bg-[#1b263b] hover:brightness-90 hover:shadow-lg transform hover:scale-105 duration-200">
                                Enquiry Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;