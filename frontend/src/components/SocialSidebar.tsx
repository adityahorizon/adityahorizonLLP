import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const SocialSidebar = () => {
    const socialLinks = [
        { icon: Phone, href: 'tel:+917990650121', label: 'Phone' },
        { icon: Mail, href: 'mailto:info@adityahorizoninternational.com', label: 'Email' },
        { icon: Facebook, href: 'https://www.facebook.com/share/1DMrTDCDDd/?mibextid=wwXIfr', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/aditya_horizon_international?igsh=MTlpd3prMDcybXRyOQ%3D%3D&utm_source=qr', label: 'Instagram' },
        { icon: Linkedin, href: 'https://www.linkedin.com/posts/aditya-horizon-international-llp_filtmor-miningsolutions-industrialfiltration-activity-7356660556742684673-QNfG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz6RvwB-TSeL_tKWGHuOqmWI3oublMEnJQ', label: 'LinkedIn' },
    ];

    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
            {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                    <a
                        key={index}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                        aria-label={link.label}
                    >
                        <IconComponent size={20} />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialSidebar;