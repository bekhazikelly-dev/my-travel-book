import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PackingItem } from "@/data/trips";

interface PackingChecklistProps {
  items: PackingItem[];
}

const PackingChecklist = ({ items }: PackingChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  // Group items by category
  const groupedItems = items.reduce(
    (acc, item) => {
      const category = item.category || "Autres";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, PackingItem[]>
  );

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <Card className="sticky top-6 h-fit shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Packing List</CardTitle>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{progress}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-semibold text-foreground opacity-70">
                {category}
              </h3>
              <div className="space-y-2 pl-2">
                {categoryItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Checkbox
                      id={item.id}
                      checked={checkedItems.has(item.id)}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={item.id}
                      className={`cursor-pointer text-sm font-body transition-all ${
                        checkedItems.has(item.id)
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PackingChecklist;
