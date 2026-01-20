const products = [
    {
        id: 1,
        name: "Phantom Runner Jacket",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Outerwear",
        description: "The Phantom Runner Jacket is engineered for wind resistance and breathability. Featuring our proprietary Kinetic-Zip technology and reflective panels for night visibility.",
        details: [
            "Water-repellent finish",
            "360-degree reflectivity",
            "Hidden pocket for media devices",
            "Articulated elbows for mobility"
        ],
        variations: {
            colors: ["Stealth Black", "Cyber Grey", "Neon Blue"],
            sizes: ["XS", "S", "M", "L", "XL"]
        },
        reviews: [
            { user: "Alex M.", rating: 5, comment: "Best jacket I've ever owned. Perfect for late night runs." },
            { user: "Sarah K.", rating: 4, comment: "Lightweight and looks amazing!" }
        ]
    },
    {
        id: 2,
        name: "Neon Pulse Leggings",
        price: 98.00,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Training",
        description: "Compressive fit meets futuristic style. The Neon Pulse Leggings provide muscle support and feature moisture-wicking fabric that feels like a second skin.",
        details: [
            "High-rise waistband",
            "Four-way stretch fabric",
            "Flatlock seams to prevent chafing",
            "Side drop-in pockets"
        ],
        variations: {
            colors: ["Electric Purple", "Deep Void", "Matrix Green"],
            sizes: ["XXS", "XS", "S", "M", "L"]
        },
        reviews: [
            { user: "Jordan T.", rating: 5, comment: "Super comfortable and stay in place during intense workouts." }
        ]
    },
    {
        id: 3,
        name: "Velocity Tech Tee",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Tops",
        description: "Stay cool under pressure. The Velocity Tech Tee uses micro-ventilation to keep your body temperature regulated during even the toughest sets.",
        details: [
            "Odor-resistant finish",
            "Quick-dry material",
            "Seamless construction",
            "Lightweight mesh panels"
        ],
        variations: {
            colors: ["Sonic White", "Obsidian", "Laser Red"],
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        reviews: [
            { user: "Chris L.", rating: 5, comment: "Does exactly what it says. Dries incredibly fast." },
            { user: "Mia R.", rating: 4, comment: "Love the fit, but the color is slightly darker than the photo." }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
