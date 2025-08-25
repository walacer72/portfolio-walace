export const Footer = () => {
    return (
        <div className="w-full mx-auto max-w-6xl flex flex-col gap-2 justify-center items-center md:flex-row md:justify-between border-t border-primary-foreground/20 text-primary-foreground/50 p-6 text-sm">
            <div className="">2025 Walace Oliveira. todos os direitos reservados.</div>
            <div className="flex gap-8 mb-10 md:mb-0">
                <a
                    target='_blank'
                    href="https://github.com/walacer72"
                    className="hover:opacity-70 transition ease-in duration-200"
                >
                    GitHub
                </a>
                <a
                    target='_blank'
                    href="https://www.linkedin.com/in/walace-oliveira-dev/"
                    className="hover:opacity-70 transition ease-in duration-200"
                >
                    Linkedin
                </a>
                <a
                    target='_blank'
                    href="https://www.instagram.com/walace_dev/?utm_source=qr&igsh=d3J0NXc0MzMxajA%3D#"
                    className="hover:opacity-70 transition ease-in duration-200"
                >
                    Instagram
                </a>
            </div>
        </div>
    )
}