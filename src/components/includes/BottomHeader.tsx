import Link from "next/link";

export default function BottomHeader({menuItems}: { menuItems: { name: string, url: string }[] }) {

    if (!menuItems || menuItems.length <= 0) {
        // todo dummy data - remove for production
        menuItems = [
            {name: "Описания", url: "#"},
            {name: "Услуги", url: "#"},
            {name: "Сервис", url: "#"},
            {name: "Стоимость услуг", url: "#"},
        ];
    }

    return menuItems && (
        <div className="header-bottom-part">
            <div className="header-bottom-container container mx-auto">
                {/* todo временные данные, заменить на данные из БД */}
                <ul className="header-bottom-menu">
                    {menuItems && menuItems.map(item => (
                        <li key={item.name}>
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

