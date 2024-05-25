import React from "react";
import Tree from "./tree";

const Home: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <Tree
                    circlesArray={[1, 3, 2, 1]}
                    header={["Unit 1","切换为英文"]}
                    subHeader={["Foundations of Scam","切换为英文"]}
                />
                <Tree
                    circlesArray={[1, 2, 1]}
                    header={["Unit 2","切换为英文"]}
                    subHeader={["Advanced Scams","切换为英文"]}
                />
            </div>
        </>
    );
};

export default Home;
