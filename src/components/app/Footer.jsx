import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
    return (
      <footer className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Exclusive Column */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Exclusive</h3>
            <div className="space-y-4">
              <h4 className="font-medium">Subscribe</h4>
              <p className="text-sm ">Get 10% off your first order</p>
              <div className="flex border border-white rounded-md w-1/2 lg:w-full">
                <Input type="email" placeholder="Enter your email" className="bg-transparent border-none focus:ring-0 outline-none focus:outline-none text-white" />
                <Button  size="icon" className="bg-transparent border-none outline-none">
                  <span className="sr-only">Subscribe</span>➜
                </Button>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Support</h3>
            <div className="space-y-4 text-sm ">
              <p>1234, Park Street,</p>
              <p>DL-111111, India.</p>
              <p>
                <a className="text-white"href="mailto:Test@testmail.com">Test@testmail.com</a>
              </p>
              <p>+91-999-999-9999</p>
            </div>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Account</h3>
            <ul className="space-y-3 text-sm ">
              <li>
                <a className="text-white"href="/account">My Account</a>
              </li>
              <li>
                <a className="text-white"href="/login">Login / Register</a>
              </li>
              <li>
                <a className="text-white"href="/cart">Cart</a>
              </li>
              <li>
                <a className="text-white"href="/wishlist">Wishlist</a>
              </li>
              <li>
                <a className="text-white"href="/shop">Shop</a>
              </li>
            </ul>
          </div>

          {/* Quick a Column */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Link</h3>
            <ul className="space-y-3 text-sm ">
              <li>
                <a className="text-white"href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a className="text-white"href="/terms">Terms Of Use</a>
              </li>
              <li>
                <a className="text-white"href="/faq">FAQ</a>
              </li>
              <li>
                <a className="text-white"href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 text-gray-400 pt-4 text-center text-sm ">
          <p>© Copyright Harmoni 2025. All right reserved</p>
        </div>
      </div>
    </footer>

);
  };