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
import { cursos, profesores } from "@/constants";

const ComboBox = ({ type, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedLabel, setSelectedLabel] = React.useState(""); // Add a new state to store the selected label

  const title =
    type === "curso" ? "Seleccionar cursos" : "Seleccionar catedraticos";
  const values = type === "curso" ? cursos : profesores;

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
          <CommandInput placeholder="Search value..." />
          <CommandList>
            <CommandEmpty>No value found.</CommandEmpty>
            <CommandGroup>
              {values.map((value) => (
                <CommandItem
                  key={value.value}
                  value={value.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    onChange(currentValue);
                    setSelectedLabel(
                      values.find((v) => v.value === currentValue)?.label
                    ); // Update the selected label
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

export default ComboBox;
