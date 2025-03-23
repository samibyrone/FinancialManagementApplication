import React from 'react'
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
    const loggedIn = {firstName: 'Samson', lastName: 'Ibironke', email: 'sammyBubby@contact.Funds'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1520.74}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[]}
            />
        </section>

    )
}

export default Home
