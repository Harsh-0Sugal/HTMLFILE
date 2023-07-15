const food = [
    {
      id: 0,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/otwz8qifqfvdjvt5qvfy",
      alt: "Image 1",
      name: "Bakingo",
      desc: "Bakery, Desserts, Beverages, Snacks",
      rating: "4.3",
      time: "53 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
            
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 1,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b139cc0e94645b50b1bca2bd8dced0cd",
      alt: "Image 2 ",
      name: "Beer Ji Special Chaap Corner",
      desc: "North Indian, Indian, Snacks",
      rating: "4.2",
      time: "21 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",  
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8f43ca4ea5868eee2d8c62e07a34fe8f",
      alt: "Image 3",
      name: "Punjabi - By Nature",
      desc: "North Indian, Snacks",
      rating: "2.7",
      time: "21 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yavzwcjd22oplyo30dnk",
      alt: "Image 3",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      desc: "Desserts, Ice Cream, Ice Cream Cakes",
      rating: "4.5",
      time: "50 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qfqlqj3bssv1ukiqzlbh",
      alt: "Image 3",
      name: "Ramo Sweets",
      desc: "Sweets",
      rating: "3.1",
      time: "45 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xbcrdqulbjzl98iioapf",
      alt: "Image 3",
      name: "Food Hut",
      desc: "North Indian, Indian, Snacks",
      rating: "4.8",
      time: "32 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/40b0a201eadbec469c2f9a06d5e7c722",
      alt: "Image 3",
      name: "Cheesecake & co.",
      desc: "Bakery, Desserts",
      rating: "3.5",
      time: "30 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dm9j2mzkl1w3unkobsby",
      alt: "Image 3",
      name: "Aangan",
      desc: "North Indian",
      rating: "3.9",
      time: "25 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ecmmf8tdia7u3a39lgwj",
      alt: "Image 3",
      name: "Hakka Wakka by Harmony Inn",
      desc: "Beverages, Chinese",
      rating: "4.0",
      time: "28 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i5ihljm5pwwfbtwaosaj",
      alt: "Image 3",
      name: "Biggies Pizza",
      desc: "Beverages, American, Desserts, Pizzas, Pastas",
      rating: "4.6",
      time: "40 MINS",
      price: "₹299 FOR TWO",
      address: "Shastri Nagar,4.4 km",
      item: [
        {
          id: 1,
          category: "Recommended",
          name: "Chocolate Jar Cake",
          price: 109,
          description:
            "Serves 1 | A thick layered velvety chocolate classic in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pkzz6btesr5a4xmrspsl"
        },
        {
          id: 2,
          category: "Recommended",
          name: "Black Forest Pastry",
          price: 89,
          description:
            "Serves 1 | A crowd favourite and for good reason. Multiple layers of moist chocolate topped with whipped cream and garnished with chocolate flakes.",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ebrjhlgnsshuinjxbuof"
        },
        {
          id: 3,
          category: "Recommended",
          name: "Butterscotch Pastry",
          price: 89,
          description:
            "Serves 1 | A childhood favourite combines butterscotch chips with choco sticks, white marbles & whipped cream",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v5je8qzy4w8s0conzzxo"
        },
        {
          id: 4,
          category: "Recommended",
          name: "Red Velvet Jar Cake",
          price: 129,
          description:
            "Serves 1 | A perfct construction of red velvet goodness, carfully layered with vanilla cream and infused with vanilla essence makes for the perfect red velvet cake in a jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ncpokjdzfqymca00ynrq"
        },
        {
          id: 5,
          category: "Recommended",
          name: "Blueberry Jar Cake",
          price: 129,
          description:
            "Serves 1 | An exotic mix of fresh blueberry pulp and freshly baked cake in a jar is a seasoal treat",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rxbbzo6bj4tkbzbkypmr"
        },
        {
          id: 6,
          category: "Exclusive Combo",
          name: "Red Velvet & Chocolate Mini Jar Cake Combo",
          price: 209,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Red velvet & Chocolate jar",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k2eai0gsurodomgnkml4"
        },
        {
          id: 7,
          category: "Exclusive Combo",
          name: "Chocolate Mud & Blueberry Mini Jar Cake Combo",
          price: 229,
          description:
            "Serves 1 | A combo of 2 mini jar cakes. Chocolate Mud & Blueberry",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ns36gmsxtbkpxej1qj8a"
        },
      ],
    },
  ];

export default food;