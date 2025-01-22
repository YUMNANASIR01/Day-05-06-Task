 # Furniro - Premium Furniture Marketplace 🛋️🏡

   Furniro is a premium online marketplace offering a curated selection of furniture and home decor items such as sofas, beds, chairs, and  lamps. Designed to combine style and functionality, Furniro provides customers with high-quality pieces to transform their living spaces.

   ---

  ## Key Highlights of Furniro: ✨
   - **Diverse Range**: A wide collection of furniture and decor items tailored to every style. 🎨
   - **Quality First**: Products crafted with the finest materials for durability and elegance. 🏆
   - **User-Friendly Interface**: Seamless shopping experience with easy navigation. 💻
   - **Customer Support**: Reliable assistance to guide customers throughout their journey. 📞

   ---

  ## Detailed Description: 🛋️
   Furniro is your go-to destination for finding the perfect blend of comfort and design for your home. With an extensive catalog featuring sofas, beds, chairs, and lamps, it caters to diverse tastes and preferences. Whether you’re looking to:
  - **Upgrade your living room** 🛋️
  - **Revamp your bedroom** 🛏️
  - **Add a modern touch to your workspace** 💼

   Furniro offers premium-quality products to suit every need. Each piece is crafted with attention to detail, ensuring both durability and aesthetic appeal. Explore our platform to discover furniture that combines practicality with timeless design. 

  **At Furniro, we strive to make your house a home.** 🏡✨

   ---

  ## Schema Flowchart 📊

   ```plaintext
   [Landing Page]
  - Sections
     - Hero
     - Browse Range
     - Photo Gallery
     - Our Products
     - Beautiful Room
     - Blog Data

  [Hero]
  - Hero Image

  [Browse Range]
  - Card
     - Card Image
     - Card Name

  [Photo Gallery]
  - Card
     - Card Image

  [Our Products]
  - Cards
     - Card Name
     - Card Src
     - Card Image
     - Card Description
     - Card Price
     - Card Original Price
     - Card Tag
     - Card Sale Percentage
     - Card Discount
     - Card Is New

  [Beautiful Room]
  - Card
     - Card Heading
     - Card Subheading
     - Card Description
     - Card Button
     - Card Image

  [Blog Data]
  - Card
     - Card Src
     - Card Date
     - Card Admin
     - Card Category
     - Card Heading
     - Card Description
     - Card Button

 [Product]
    - Product Name
    - Description
    - Product Price
    - Discount Percentage
    - Price Without Discount
    - Rating
    - Rating Count
    - Tags
    - Sizes
    - Product Image



   Relationships in Diagram 🔗

   [Landing Page] --------> [Hero]
         |
         |
         --> [Browse Range]
         |
         --> [Photo Gallery]
         |
         --> [Our Products]
         |
         --> [Beautiful Room]
         |
         --> [Blog Data]

 [Our Products] --------> [Product]


      #Key Fields for Each Entity 🔑

   1. Product:

        name: Product Name (string) 🏷️
        description: Description (string) 📝
        price: Product Price (number) 💵
        discountPercentage: Discount Percentage (number) 🔻
        priceWithoutDiscount: Price Without Discount (number) 💰
        rating: Rating (number) ⭐
        ratingCount: Rating Count (number) 🧑‍🤝‍🧑
        tags: Tags (array of strings) 🏷️
        sizes: Sizes (array of strings) 📏
       image: Product Image (image) 🖼️


      2. Landing Page:
         sections: Array of section types (hero, browseRange, photoGallery, ourProducts, beautifulRoom, blogData) 📋
      3. Hero:
         heroImg: Main Image (image) 🌅
      4. Browse Range:
         card: Array of objects with cardImage (image) and cardName (string) 🏷️
      5. Photo Gallery:
         card: Array of objects with cardImage (image) 📸
      6. Our Products:
         cards: Array of objects with product details (name, image, description, price, etc.) 🛍️
      7. Beautiful Room:
         card: Array of objects with room details (heading, subheading, description, button, image) 🏠
      8. Blog Data:
         card: Array of objects with blog post details (image, date, admin, category, heading, description, button) 📝



    **Implied Entities** 🔄

     **9. Order:**
    - **orderID**: Unique identifier for the order 📦
    - **customerID**: Reference to the customer 🧑‍🤝‍🧑
    - **products**: Array of product IDs and quantities 📑
    - **totalPrice**: Total price of the order 💸

     **10. Customer:**
    - **customerID**: Unique identifier for the customer 👤
    - **name**: Customer's name 🧑‍💼
    - **email**: Customer's email address 📧
    - **address**: Shipping address 🏠

    **11. Shipment:**
    - **shipmentID**: Unique identifier for the shipment 🚚
    - **orderID**: Reference to the order 📦
    - **status**: Current status of the shipment 🚚

    **12. Delivery Zone:**
    - **zoneName**: Name of the delivery zone 🌍
    - **coverageArea**: Area covered by this zone 🗺️

      This structure provides a simplified view of the Furniro e-commerce platform, focusing on the main entities and their relationships. The key fields for each entity are based on the Sanity schema files you provided, with some additional implied entities to complete the e-commerce functionality. 🌐🛒

