import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex items-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent ">
                    AI Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Promptopia is an open source AI prompting tool for modern world
                to discover, create and share creative prompts
            </p>

            <Feed />
        </section>
    );
};

export default Home;
