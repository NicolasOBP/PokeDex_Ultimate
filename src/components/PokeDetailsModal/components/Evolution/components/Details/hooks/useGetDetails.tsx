import { useEffect, useState } from "react";
import { Details } from "../../../../../../../types/pokeType";

type Data = {
  label: string;
  value: string;
};

export default function useGetDetails(details: Details) {
  const [data, setData] = useState<Data[]>();
  let datas: Data[] = [];

  useEffect(() => {
    organizeDetails();
  }, []);
  function getOutSameKay() {
    const uniqueArray = datas.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.label === item.label)
    );
    return uniqueArray;
  }

  function organizeDetails() {
    try {
      details.map((a) => {
        for (const key of Object.keys(a)) {
          if (key !== "trigger") {
            if (a[key]) {
              if (
                key == "item" ||
                key == "location" ||
                key == "known_move_type"
              ) {
                datas.push({ label: key, value: a[key].name });
              } else {
                datas.push({ label: key, value: a[key] });
              }
            }
          }
          setData(getOutSameKay());
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  return data;
}
