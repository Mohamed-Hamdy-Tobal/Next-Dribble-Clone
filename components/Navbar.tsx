import { NavLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import AuthProviders from '@/components/AuthProviders'

const Navbar = () => {

    const session = {};

    return (
        <header className="navbar flexBetween">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={115} height={43} />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto
                        <Link href='/create-project'>Share Photo</Link>
                    </>
                ) : <AuthProviders />}
            </div>
        </header>
    );
};


export default Navbar