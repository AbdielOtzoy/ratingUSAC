"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { all } from "@/constants";

const FilterComboBox = ({ setFilter }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedLabel, setSelectedLabel] = React.useState(""); // Add a new state to store the selected label

  const title = "Selecciona filtro";

  const values = all;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-full justify-between"
        >
          {selectedLabel ? selectedLabel : title}
          <ChevronsUpDown className="ml-2 h-4 w-5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar valor..." />
          <CommandList>
            <CommandEmpty>Valor no encontrado.</CommandEmpty>
            <CommandGroup>
              {values.map((value) => (
                <CommandItem
                  key={value.value}
                  value={value.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    console.log(currentValue);
                    setSelectedLabel(
                      values.find((v) => v.value === currentValue)?.label
                    ); // Update the selected label
                    setFilter(currentValue); // Update the filter value
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === value.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {value.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterComboBox;
