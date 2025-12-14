export default function SinglePageIncludesPillsSection({includes}: { includes: string[] }) {
    return (
        <div className="includes">
            <div className="flex flex-row flex-wrap gap-8">
                {includes && includes.map(include => (
                    <span key={include} className="pill l-blue fnt-tags-small">{include}</span>
                ))}
            </div>
        </div>
    );
}

