import React from 'react'

const RightSideBar = ({ user, transactions, banks } : RightSidebarProps ) => {
    return (
        <aside className="right-sidecar">
            <section className="flex flex-cols pb-8">
                <div className="profile-banner">
                    <div className="profile">
                        <div className="profile-img">
                            <span className="text-5xl font-bold text-blue-500">
                                {user.firstName[0]}
                            </span>
                        </div>
                        <div className="profile-details">
                            <h1 className="profile-name">
                                {user.firstName} {user.lastName}
                            </h1>
                            <p className="profile-email">
                                {user.email}
                                {}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    )
}
export default RightSideBar
