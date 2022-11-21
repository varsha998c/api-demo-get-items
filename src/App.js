import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const getData = () => {
        axios
            .get(
                "https://d2w20tuu2vbvr.cloudfront.net/miscs/cats?orgId=1637320776228"
            )
            .then((response) => {
                const { status, data } = response;
                if (status === 200) {
                    setItems(data.items);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <div>
                {items
                    .filter((item) => item.parentId === "4732285879")
                    .map((data) => (
                        <p>
                            Accessories{"->"}
                            {data.title}
                        </p>
                    ))}
            </div>
            <br />
            <div>
                {items
                    .filter((item) => item.parentId === "8528837624")
                    .map((data) => (
                        <p>
                            All Jewellery{"->"} {data.title}
                        </p>
                    ))}
            </div>
            <br />
            <div>
                {items
                    .filter((item) => item.parentId === "9216500594")
                    .map((data) => (
                        <p>
                            Clothes {"->"} {data.title}
                        </p>
                    ))}
            </div>
            <div>
                {items
                    .filter((item) => item.parentId === "8802575827")
                    .map((data) => (
                        <p>
                            Clothes {"->"} Trousers {"->"} {data.title}
                        </p>
                    ))}
            </div>
            <br />
            <div>
                {items
                    .filter((item) => item.parentId === "7614351468")
                    .map((data) => (
                        <p>
                            Gold Jewellery {"->"}
                            {data.title}
                        </p>
                    ))}
            </div>
        </div>
    );
}

export default App;
