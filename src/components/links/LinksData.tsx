import Link from 'next/link'
import path from 'path'
import React from 'react'

const LinksData = () => {
    const NavLink = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/courses",
            title: "Courses"
        },
        {
            path: "/for_tutor",
            title: "For Tutors"
        },
    ]
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 50,
                fontSize: 25
            }}>

                {NavLink.map((links => (
                    <Link href={links.path}
                        key={links.path}
                        style={{

                        }}>{links.title}

                    </Link>

                )))}

            </div>



        </>
    )
}

export default LinksData
