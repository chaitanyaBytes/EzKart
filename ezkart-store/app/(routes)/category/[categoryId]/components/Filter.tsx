"use client";

import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const currentQuery = qs.parse(searchParams.toString());

    const query = {
      ...currentQuery,
      [valueKey]: id,
    };

    if (currentQuery[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-xl text-sm text-gray-800 p-2 bg-gray-50 border border-gray-300",
                selectedValue === filter.id &&
                  "bg-black text-white hover:bg-gray-800"
              )}
              onClick={() => {
                onClick(filter.id);
              }}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
