import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "@/components/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-0 flex lg:ml-0 gap-x-1">
            <p className="font-bold text-xl">EzKART</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
