"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Course">
                    <div className="flex flex-col gap-x-3">
                        <HoveredLink href="/courses">All courses</HoveredLink>
                        <HoveredLink href="/music-theoy">Music Theoy</HoveredLink>
                        <HoveredLink href="/advance-composition">Advance Composiion</HoveredLink>
                        <HoveredLink href="/songwiting">Songwriting</HoveredLink>
                        <HoveredLink href="/music-production">Music poducion</HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/contact-us">
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
