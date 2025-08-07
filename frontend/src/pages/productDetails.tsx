import { useNavigate, useSearchParams } from "react-router-dom";
import { productCategories } from "../data.ts";
import { useMemo, useRef, useState } from "react";

const ZOOM_SIZE = 150;
const ZOOM_SCALE = 2;

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const categoryKey = searchParams.get("category");
    const subCategoryName = searchParams.get("subcategory");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    const productImages = useMemo(() => {
        return [product.image, product.image2, product.image3].filter(Boolean);
    }, [product]);

    if (!product) {
        return <div className="py-24 mt-16 text-center text-red-600">Product not found.</div>;
    }

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    };

    return (
        <div className="px-2 lg:px-8 pt-24 pb-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:h-screen">
                {/* <div className="w-full lg:w-1/2 relative">
                    <div
                        ref={imageRef}
                        className="relative w-full h-[420px] lg:h-[600px] overflow-hidden rounded-xl shadow-xl bg-muted"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <img
                            src={product.image || "/images/placeholder.png"}
                            alt={product.name}
                            className="w-full h-full object-contain max-h-[600px]"
                            style={{ padding: '20px 12px' }}
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
                </div> */}
                <div className="w-full lg:w-1/2 relative">
                    <div
                        ref={imageRef}
                        className="relative w-full h-[420px] lg:h-[600px] overflow-hidden rounded-xl shadow-xl bg-muted"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <img
                            src={productImages[currentImageIndex] || "/images/placeholder.png"}
                            alt={`${product.name} ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain max-h-[600px]"
                            style={{ padding: '20px 12px' }}
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

                        {/* {productImages.length > 1 && (
                            <div className="flex gap-2 mt-4 justify-center">
                                {productImages.map((img: string, idx: number) => (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`border-2 rounded-md cursor-pointer transition ${idx === currentImageIndex ? "border-blue-600" : "border-transparent"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-20 h-20 object-contain p-1"
                                        />
                                    </div>
                                ))}
                            </div>
                        )} */}

                        {productImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 shadow p-2 rounded-full hover:bg-gray-200"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 shadow p-2 rounded-full hover:bg-gray-200"
                                >
                                    ›
                                </button>
                            </>
                        )}



                    </div>

                    {isHovering && (
                        <div
                            className="absolute bg-white top-0 left-full ml-6 border border-gray-300 shadow-lg rounded-md overflow-hidden z-10"
                            style={{
                                width: ZOOM_SIZE * ZOOM_SCALE,
                                height: ZOOM_SIZE * ZOOM_SCALE,
                                backgroundImage: `url(${productImages[currentImageIndex]})`,
                                backgroundSize: `${imageRef.current!.offsetWidth * ZOOM_SCALE}px ${imageRef.current!.offsetHeight * ZOOM_SCALE}px`,
                                backgroundPosition: `-${(mousePos.x * ZOOM_SCALE) - ZOOM_SIZE}px -${(mousePos.y * ZOOM_SCALE) - ZOOM_SIZE}px`,
                            }}
                        />
                    )}
                </div>
                {/* {productImages.length > 1 && (
                    <div className="flex gap-2 mt-4 justify-center">
                        {productImages.map((img: string, idx: number) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`border-2 rounded-md cursor-pointer transition ${idx === currentImageIndex ? "border-blue-600" : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-20 h-20 object-contain p-1"
                                />
                            </div>
                        ))}
                    </div>
                )} */}
                <div className="w-full lg:w-1/2 lg:h-full">
                    <div
                        className="space-y-6 pr-0 lg:pr-4 lg:overflow-y-auto lg:h-full"
                        style={{
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#cbd5e1 #f1f5f9',
                            padding: '20px 12px'
                        }}
                    >
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-slate-800">{product.name}</h1>
                            <p className="text-slate-600">{product.description}</p>
                            {product?.description2 && (
                                <p
                                    dangerouslySetInnerHTML={{ __html: product.description2 }}
                                />
                            )}
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
                                                        <span dangerouslySetInnerHTML={{ __html: String(value) }} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* {product?.technicalAdvantages && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Technical Design Advantages: </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-slate-300 text-sm text-left rounded-lg overflow-hidden">
                                        <tbody>
                                            {Object.entries(product.technicalAdvantages).map(([key, value], idx) => (
                                                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                    <td className="font-medium px-3 py-1 bg-slate-100 ">{key}</td>
                                                    <td className="px-3 py-1">
                                                        <span dangerouslySetInnerHTML={{ __html: String(value) }} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )} */}

                        {/* {product?.performanceHighlights && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">
                                    Performance Highlights
                                </h2>
                                <ul className="list-disc list-inside text-slate-700 space-y-1">
                                    {product.performanceHighlights.map((benefit: any, idx: any) => (
                                        <li key={idx} dangerouslySetInnerHTML={{ __html: benefit }} />
                                    ))}
                                </ul>
                            </div>
                        )} */}

                        {/* {product?.applicationFields && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">
                                    Application Fields:
                                </h2>
                                <ul className="list-disc list-inside text-slate-700 space-y-1">
                                    {product.applicationFields.map((benefit: any, idx: any) => (
                                        <li key={idx} dangerouslySetInnerHTML={{ __html: benefit }} />
                                    ))}
                                </ul>
                            </div>
                        )} */}

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

                        {/* {product?.bearingTable && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Bearing Specifications</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-slate-300 text-sm text-center rounded-lg overflow-hidden">
                                        <thead className="bg-slate-200 text-slate-700">
                                            <tr>
                                                <th rowSpan={2} className="p-3 border-r border-slate-300 font-semibold">Item No</th>
                                                <th colSpan={3} className="p-3 border-r border-slate-300 font-semibold">Dimension (mm)</th>
                                                <th colSpan={2} className="p-3 font-semibold">Basic Load Rating (kN)</th>
                                            </tr>
                                            <tr className="bg-slate-100 text-slate-600">
                                                <th className="p-2 border-r border-slate-300 font-medium">d</th>
                                                <th className="p-2 border-r border-slate-300 font-medium">D</th>
                                                <th className="p-2 border-r border-slate-300 font-medium">T</th>
                                                <th className="p-2 border-r border-slate-300 font-medium">Dynamic</th>
                                                <th className="p-2 font-medium">Static</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.bearingTable.map((bearing: any, idx: number) => (
                                                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                    <td className="p-2 font-semibold">{bearing.itemNo}</td>
                                                    <td className="p-2">{bearing.d}</td>
                                                    <td className="p-2">{bearing.D}</td>
                                                    <td className="p-2">{bearing.T}</td>
                                                    <td className="p-2">{bearing.dynamicLoad}</td>
                                                    <td className="p-2">{bearing.staticLoad}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )} */}

                        {product?.bearingTable && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Bearing Specifications</h2>

                                {(() => {
                                    const hasD = product.bearingTable.some((b: any) => b.d);
                                    const hasDcap = product.bearingTable.some((b: any) => b.D);
                                    const hasT = product.bearingTable.some((b: any) => b.T);
                                    const hasDynamic = product.bearingTable.some((b: any) => b.dynamicLoad);
                                    const hasStatic = product.bearingTable.some((b: any) => b.staticLoad);

                                    return (
                                        <div className="overflow-x-auto">
                                            <div className="inline-block w-full sm:min-w-full min-w-[600px] border border-slate-300 rounded-lg overflow-hidden">
                                                <table className="w-full text-sm text-center border-collapse">
                                                    <thead className="bg-slate-200 text-slate-700">
                                                        <tr>
                                                            <th rowSpan={2} className="p-3 border-r border-slate-300 font-semibold">Item No</th>
                                                            {(hasD || hasDcap || hasT) && (
                                                                <th colSpan={
                                                                    [hasD, hasDcap, hasT].filter(Boolean).length
                                                                } className="p-3 border-r border-slate-300 font-semibold">Dimension (mm)</th>
                                                            )}
                                                            {(hasDynamic || hasStatic) && (
                                                                <th colSpan={
                                                                    [hasDynamic, hasStatic].filter(Boolean).length
                                                                } className="p-3 font-semibold">Basic Load Rating (kN)</th>
                                                            )}
                                                        </tr>
                                                        <tr className="bg-slate-100 text-slate-600">
                                                            {hasD && <th className="p-2 border-r border-slate-300 font-medium">d</th>}
                                                            {hasDcap && <th className="p-2 border-r border-slate-300 font-medium">D</th>}
                                                            {hasT && <th className="p-2 border-r border-slate-300 font-medium">T</th>}
                                                            {hasDynamic && <th className="p-2 border-r border-slate-300 font-medium">Dynamic</th>}
                                                            {hasStatic && <th className="p-2 font-medium">Static</th>}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {product.bearingTable.map((bearing: any, idx: number) => (
                                                            <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                                                <td className="p-2 font-semibold">{bearing.itemNo}</td>
                                                                {hasD && <td className="p-2">{bearing.d || "-"}</td>}
                                                                {hasDcap && <td className="p-2">{bearing.D || "-"}</td>}
                                                                {hasT && <td className="p-2">{bearing.T || "-"}</td>}
                                                                {hasDynamic && <td className="p-2">{bearing.dynamicLoad || "-"}</td>}
                                                                {hasStatic && <td className="p-2">{bearing.staticLoad || "-"}</td>}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}



                        {product?.customOptions && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-2">Custom Options</h2>
                                <p className="text-slate-600 leading-relaxed">{product.customOptions}</p>
                            </div>
                        )}

                        <div className="flex gap-4 justify-center lg:justify-start pt-4">
                            <a href="tel:+917990650121">
                                <button className="text-white font-semibold py-3 px-4 rounded-full transition bg-[#ec4a0a] hover:brightness-90 hover:shadow-lg transform hover:scale-105 duration-200">
                                    Call Us Now
                                </button>
                            </a>

                            <button onClick={() => navigate('/contact')} className="text-white font-semibold py-3 px-4 rounded-full transition bg-[#1b263b] hover:brightness-90 hover:shadow-lg transform hover:scale-105 duration-200">
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