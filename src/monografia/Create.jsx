import { Input } from "@chakra-ui/react";

export function Create() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center mt-6 gap-4">
        <Input type="text" placeholder="título" width="400px" />
        <Input type="date" placeholder="data da apresentação" width="400px" />
        <Input type="text" placeholder="quantidade de páginas" width="400px" />
        <Input type="file" placeholder="pdf" width="400px" />
      </div>
    </div>
  );
}
