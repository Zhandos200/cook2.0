const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Подключаем модель рецептов

const MONGO_URI = "mongodb+srv://assbreaker2023:hello123@cluster0.1enst.mongodb.net/hello?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Подключено к MongoDB"))
    .catch(err => console.error("Ошибка подключения:", err));

const seedRecipes = [
    {
        title: "Spaghetti Carbonara",
        description: "Indulge in the rich, creamy flavors of Spaghetti Carbonara—an irresistible Italian classic with savory pancetta and Parmesan!",
        image: "https://i.pinimg.com/736x/2a/53/07/2a53076cd9691706d0d0f33b848e5421--tomato-basil-sauce-basil-pasta.jpg",
        slug: "spaghetti-carbonara"
    },
    {
        title: "Chocolate Cake",
        description: "Treat yourself to a decadent, moist Chocolate Cake, bursting with rich cocoa flavor and velvety, smooth frosting!",
        image: "https://sun9-58.userapi.com/impf/c637918/v637918942/435cc/f7lQw6IXHE8.jpg?size=604x402&quality=96&sign=0d8b32752a30e8f17992a349b9f739a2&type=album",
        slug: "chocolate-cake"
    },
    {
        title: "Margherita Pizza",
        description: "Savor the simplicity of a classic Margherita Pizza—fresh mozzarella, tangy tomato sauce, and fragrant basil on a crispy crust!",
        image: "https://avatars.mds.yandex.net/i?id=503d03c038ed3979d52473329579b31a_l-8209398-images-thumbs&n=13",
        slug: "margherita-pizza"
    },
    {
        title: "Caesar Salad",
        description: "Enjoy the crisp, refreshing flavors of Caesar Salad romaine, Parmesan and savory croutons for the perfect bite!",
        image: "https://i.pinimg.com/originals/df/e9/f9/dfe9f93de9e80cc49a1522e0ff8e460c.jpg",
        slug: "caesar-salad"
    },
    {
        title: "Chicken Biryani",
        description: "Delight in the aromatic flavors of Chicken Biryani—tender chicken, fragrant basmati rice, and a blend of bold spices in every bite!",
        image: "https://i.pinimg.com/originals/eb/07/fb/eb07fbadd098d0c1b4455daae8025210.jpg",
        slug: "chicken-biryani"
    },
    {
        title: "Tom Yum Soup",
        description: "Experience the vibrant, tangy flavors of Tom Yum Soup—spicy Thai broth with shrimp, fresh herbs, and zesty lime!",
        image: "https://breadnshow.ru/image/catalog/articles/c40b_4.jpg",
        slug: "tom-yum-soup"
    },
    {
        title: "French Croissants",
        description: "Indulge in the flaky, buttery perfection of French Croissants—golden layers that melt in your mouth with every bite!",
        image: "https://pazlyigra.ru/uploads/posts/2020-11/1604964672_nastol_com_ua-260453.jpg",
        slug: "french-croissants"
    },
    {
        title: "Sushi Platter",
        description: "Dive into a fresh, colorful Sushi Platter—delicate slices of fish, perfectly seasoned rice, and vibrant flavors in every roll!",
        image: "https://i.pinimg.com/originals/20/72/3b/20723b5e6365155bc64a6299c64317e7.jpg",
        slug: "sushi-platter"
    },
    {
        title: "Beef Tacos",
        description: "Enjoy the bold, zesty flavors of Beef Tacos—juicy seasoned beef, fresh toppings, and a crispy tortilla for the perfect bite!",
        image: "https://taksidomodedovo.com/images/msledf_1003_beeftaco_horiz.jpg",
        slug: "beef-tacos"
    },
    {
        title: "Pad Thai",
        description: "Savor the delicious blend of flavors in Pad Thai—stir-fried noodles, tender shrimp and a tangy sauce that excites the palate!",
        image: "https://wok-pho.ru/uploads/styles/product_image_preview/webstore_products_049d6b62ae5ed5c28196f254e1b678c1.jpg?1661508025",
        slug: "pad-thai"
    },
    {
        title: "Banana Pancakes",
        description: "Treat yourself to fluffy Banana Pancakes—light, sweet, and bursting with ripe banana flavor, topped with syrup for a delightful breakfast!",
        image: "https://avatars.mds.yandex.net/i?id=e7f63f5b20490d7d957e6a78243e3986_l-9657618-images-thumbs&n=13",
        slug: "banana-pancakes"
    },
    {
        title: "Lasagna",
        description: "Dive into layers of cheesy goodness with Lasagna—rich meat sauce, creamy béchamel, and perfectly baked pasta for a comforting meal!",
        image: "https://avatars.mds.yandex.net/i?id=e21e0d022f46e266a5cf7528b083a289_l-2477903-images-thumbs&n=13",
        slug: "lasagna"
    },
    {
        title: "Tiramisu",
        description: "Indulge in the luxurious layers of Tiramisu—espresso-soaked ladyfingers and a dusting of cocoa for the perfect dessert!",
        image: "https://cdn-m.sport24.ru/m/ce15/0e82/e282/4cdd/80cc/2848/df85/0c9b/1600_10000_max.jpeg",
        slug: "tiramisu"
    },
    {
        title: "Chocolate Chip Cookies",
        description: "Enjoy warm, gooey chocolate chip cookies, freshly baked to perfection—perfect for any sweet tooth!",
        image: "https://i.ytimg.com/vi/dxisygejvls/maxresdefault.jpg",
        slug: "chocolate-chip-cookies"
    },
    {
        title: "Cheesecake",
        description: "Savor the creamy delight of classic cheesecake with a buttery graham cracker crust and fresh fruit topping!",
        image: "https://artkonditer.by/wp-content/uploads/2019/10/Slivochnyj-biskvit.jpg",
        slug: "cheesecake"
    }
];

async function seedDB() {
    try {
        await Recipe.deleteMany(); // Очистка базы перед добавлением новых данных
        await Recipe.insertMany(seedRecipes);
        console.log("✅ База данных заполнена тестовыми рецептами!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Ошибка при заполнении базы данных:", error);
    }
}

seedDB();
