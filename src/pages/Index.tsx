import { ShoppingBag, Search, User, Menu, Star, ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "Nike Air Max 90", brand: "Nike", price: 130, rating: 4.8, image: "/images/shoe1.png", tag: "Best Seller" },
  { id: 2, name: "Ultraboost 22", brand: "Adidas", price: 190, rating: 4.7, image: "/images/shoe2.png", tag: "New" },
  { id: 3, name: "New Balance 550", brand: "New Balance", price: 110, rating: 4.6, image: "/images/shoe3.png", tag: null },
  { id: 4, name: "Suede Classic", brand: "Puma", price: 75, rating: 4.5, image: "/images/shoe4.png", tag: null },
  { id: 5, name: "Chuck Taylor Hi", brand: "Converse", price: 65, rating: 4.9, image: "/images/shoe5.png", tag: "Popular" },
  { id: 6, name: "Classic Leather", brand: "Reebok", price: 85, rating: 4.4, image: "/images/shoe6.png", tag: null },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <h1 className="font-heading text-2xl font-bold tracking-tight">
              KICK<span className="text-primary">STORE</span>
            </h1>
            <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
              <a href="#" className="transition-colors hover:text-foreground">New Arrivals</a>
              <a href="#" className="transition-colors hover:text-foreground">Men</a>
              <a href="#" className="transition-colors hover:text-foreground">Women</a>
              <a href="#" className="transition-colors hover:text-foreground">Sale</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-secondary p-2.5 transition-colors hover:bg-muted md:block" aria-label="Search">
              <Search className="h-4 w-4 text-foreground" />
            </button>
            <button className="hidden rounded-full bg-secondary p-2.5 transition-colors hover:bg-muted md:block" aria-label="Account">
              <User className="h-4 w-4 text-foreground" />
            </button>
            <button className="relative rounded-full bg-primary p-2.5" aria-label="Cart">
              <ShoppingBag className="h-4 w-4 text-primary-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                3
              </span>
            </button>
            <button className="rounded-full bg-secondary p-2.5 md:hidden" aria-label="Menu">
              <Menu className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full md:h-[520px]">
          <img
            src="/images/hero-banner.png"
            alt="Sneaker collection on display in a modern store"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                Spring Collection 2026
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
                Step Into<br />Your Style
              </h2>
              <p className="mt-4 max-w-md text-base text-primary-foreground/80">
                Discover the latest sneakers from top brands. Free shipping on orders over $100.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                Shop Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="font-heading text-3xl font-bold">Popular Sneakers</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline md:flex">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name} sneaker`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.brand}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{product.name}</h3>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-foreground px-8 py-12 text-center md:px-16">
          <h2 className="font-heading text-2xl font-bold text-background md:text-3xl">
            Get 10% Off Your First Order
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-background/60">
            Subscribe to our newsletter and never miss out on new drops and exclusive deals.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 bg-background/10 px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-heading text-lg font-bold">
                KICK<span className="text-primary">STORE</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Your destination for the freshest kicks since 2024.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Shop</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">New Arrivals</a></li>
                <li><a href="#" className="hover:text-foreground">Best Sellers</a></li>
                <li><a href="#" className="hover:text-foreground">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Help</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Shipping</a></li>
                <li><a href="#" className="hover:text-foreground">Returns</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © 2026 KickStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
