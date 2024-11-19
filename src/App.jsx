import './App.css'

function App() {
  return (
    <>
    <nav className='flex bg-black fixed w-full p-5 text-white font-bold h-16'>
    <i className="fa-solid fa-mug-saucer fa-bounce text-yellow-600"></i>
      <h4 className='text-yellow-600 space-x-2.5 fa-bounce'>CAFE HOUSE</h4>
      <ul className='flex-1 text-right'>
       <li className='list-none inline-block  px-5 text-yellow-600'>Home</li>
        <li className='list-none inline-block px-5 text-yellow-600'>Today's Special</li>
        <li className='list-none inline-block px-5 text-yellow-600'>Menu</li>
        <li className='list-none inline-block px-5 text-yellow-600'>Contact</li>
      </ul>
    </nav>
    <div id="sixth">
    <div className="sixth1">
    <h1 className='wel mb-5'>Welcome To</h1>
    <h2 className='head text-yellow-600'>CAFE HOUSE</h2>
    <p className='text-white text-center p-3.5'>Welcome to <span className='text-yellow-600'>CAFE HOUSE</span>, your cozy corner for delightful brews and tasty bites. Whether you're here to work,<br /> unwind, or catch up with friends, we’re here to make your day better, one cup at a time!At<span className='text-yellow-600'>CAFE HOUSE</span>, we believe  <br />that coffeeis more than just a drink—it's an experience. Our mission is to bring  you high-quality, ethically <br />sourced coffee and a warm, inviting atmosphere where everyone feels at home</p>
    <button className='text-white bg-amber-700 px-14 py-2 rounded-full my-5'>DETAILS</button>
    </div>
    </div>
    <div className='text-center py-12 bg-white shadow-md'>
      <h1 className='text-yellow-600 font-bold text-2xl'>The Best Coffee For You</h1>
      <h4 className='text-gray-800 font-semibold text-4xl mt-2'>Cafe House</h4>
      <p className='text-gray-600 max-w-lg mx-auto mt-4'>At [Coffee Shop Name], we believe that coffee is more than just a drink—it's an experience. Our mission is to bring you high-quality, ethically sourced coffee and a warm, inviting atmosphere where everyone feels at homeFrom rich espressos and creamy lattes to refreshing cold brews and artisanal teas, we’re proud to serve a variety of drinks crafted to perfection. Don’t forget to pair them with our freshly baked pastries and wholesome snacks.</p>
      <button className='mt-6 bg-yellow-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-600 my-5'>READ MORE</button>

    </div>
    <div class="py-12">
    <div class="text-center">
      <h3 class="text-yellow-600 font-semibold text-xl">Popular Items</h3>
      <div class="mt-1 border-t-2 border-yellow-600 w-16 mx-auto"></div>
    </div>

    
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-16">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2wyDYfr1bSRPUN9EFaYaocOKUzc6qa-ckA&s" alt="Americano" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h4 class="text-gray-800 font-semibold text-lg">Americano</h4>
          <p class="text-gray-600 text-sm mt-2">
            Maecenas tempus tellus eget condimentum rhoncus, semper libero sit amet.
          </p>
        </div>
      </div>

    
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://vaya.in/recipes/wp-content/uploads/2019/02/Cappuccino.jpg" alt="Cappuccino" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h4 class="text-gray-800 font-semibold text-lg">Cappuccino</h4>
          <p class="text-gray-600 text-sm mt-2">
            Maecenas tempus tellus eget condimentum rhoncus, semper libero sit amet.
          </p>
        </div>
      </div>

  
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726" alt="Mocha" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h4 class="text-gray-800 font-semibold text-lg">Mocha</h4>
          <p class="text-gray-600 text-sm mt-2">
            Maecenas tempus tellus eget condimentum rhoncus, semper libero sit amet.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mb-8">
    <h2 class="text-2xl font-bold text-yellow-700 flex items-center justify-center">
      <span class="mr-2">☕</span> Today's Special
    </h2>
    <hr class="mt-2 border-t-2 border-yellow-300 w-20 mx-auto" />
  </div>
  <div class="grid grid-cols-5 gap-4 ml-56">
  <div class="relative">
      <img
        src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/Coffee-Croissant.jpg"
        alt="Small Image 1"
        class="w-full h-full object-cover rounded-lg"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 rounded-lg">
      </div>
    </div>
    <div class="relative">
      <img
        src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/Coffee-Croissant.jpg"
        alt="Small Image 1"
        class="w-full h-full object-cover rounded-lg"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 rounded-lg">
      </div>
    </div>
    <div class="relative">
      <img
        src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/Coffee-Croissant.jpg"
        alt="Small Image 1"
        class="w-full h-full object-cover rounded-lg"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 rounded-lg">
      </div>
    </div>
    <div class="relative">
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/f7/bc/b6/photo0jpg.jpg?w=600&h=400&s=1"
        alt="Small Image 2"
        class="w-full h-full object-cover rounded-lg"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 rounded-lg">
      </div>
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen">
  <div class="py-12">
    <div class="text-center mb-1">
      <h2 class="text-2xl font-bold text-yellow-700 flex items-center justify-center">
        <span class="mr-2">☕</span> Daily Menu
      </h2>
      <hr class="mt-2 border-t-2 border-yellow-300 w-20 mx-auto" />
    </div>
    <div class="bg-gray-100 p-2 min-h-screen flex items-center justify-center">
  <div class="container mx-auto flex flex-wrap md:flex-nowrap items-start gap-8">
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="https://ilyapa.com/cdn/shop/products/4e21e7b7-bd3e-5965-800b-3975d30547e1_1600x.jpg?v=1678807904"
        alt="Menu Board"
        class="w-full max-w-sm object-cover rounded-lg shadow-lg"
      />
    </div>

    <div class="w-full md:w-1/2 text-gray-800">
      <p class="mb-4">
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
        Etiam rhoncus.
      </p>
      <ul class="list-decimal pl-6 space-y-2 text-gray-600">
        <li>Tellus eget condimentum rhoncus.</li>
        <li>Sem quam semper libero.</li>
        <li>Sit amet adipiscing sem neque sed ipsum.</li>
        <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
        <li>Maecenas nec odio et ante tincidunt tempus.</li>
        <li>Donec vitae sapien ut libero venenatis faucibus.</li>
      </ul>
      <div class="mt-6">
      <button className='text-white bg-amber-700 px-14 py-2 rounded-full my-5'>READ MORE</button>
      </div>
    </div>
  </div>
</div>
<footer class="bg-gray-800 text-gray-300 p-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div>
      <h3 class="text-white font-bold text-lg mb-4">Main Menu</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#" class="hover:text-gray-400">About Us</a></li>
        <li><a href="#" class="hover:text-gray-400">Directory</a></li>
        <li><a href="#" class="hover:text-gray-400">Blog</a></li>
        <li><a href="#" class="hover:text-gray-400">Our Services</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-white font-bold text-lg mb-4">About Us</h3>
      <p class="text-gray-400 mb-4">
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      </p>
      <p class="text-gray-400">
        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
      </p>
    </div>

    <div>
      <h3 class="text-white font-bold text-lg mb-4">Get Social</h3>
      <p class="text-gray-400 mb-4">
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      </p>
      <div class="flex space-x-4">
        <a href="#" class="w-8 h-8 bg-gray-600 hover:bg-gray-500 flex items-center justify-center rounded">
          <i class="fab fa-facebook-f text-white"></i>
        </a>
        <a href="#" class="w-8 h-8 bg-gray-600 hover:bg-gray-500 flex items-center justify-center rounded">
          <i class="fab fa-twitter text-white"></i>
        </a>
        <a href="#" class="w-8 h-8 bg-gray-600 hover:bg-gray-500 flex items-center justify-center rounded">
          <i class="fab fa-linkedin-in text-white"></i>
        </a>
        <a href="#" class="w-8 h-8 bg-gray-600 hover:bg-gray-500 flex items-center justify-center rounded">
          <i class="fab fa-youtube text-white"></i>
        </a>
        <a href="#" class="w-8 h-8 bg-gray-600 hover:bg-gray-500 flex items-center justify-center rounded">
          <i class="fab fa-behance text-white"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

    
</div>
</div>

  


    </>
    )
    }
  

export default App