'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function AreaPage() {
  const [area, setArea] = useState(0);
  return (
    <>
      <section id="headeline" className="mb-15">
        <h2 className="text-2xl mb-5 font-bold">Got some room?</h2>
        <h3 className="text-lg">
          Too help us estimate how much solar we can realistically fit on your
          property, we’ll need to know the available space. This lets us figure
          out the ideal number and size of panels for your energy needs. Since
          things change depending on whether your roof is flat or sloped, it’d
          be great if you could also let us know the roof angle. That helps us
          fine-tune the setup for maximum efficiency.
        </h3>
      </section>
      <div className="w-full min-w-[400px]">
        <Card>
          <CardHeader>Area avaible for solar</CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Where" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Installation type</SelectLabel>
                    <SelectItem value="sqm">Roof mounted</SelectItem>
                    <SelectItem value="sqft">Ground mounted</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label>Space avaible</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input value={area} type="number" placeholder="Area avaible" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Unit of Measurment</SelectLabel>
                      <SelectItem value="sqm">Square Meters (M²)</SelectItem>
                      <SelectItem value="sqft">Square Feet (Ft²)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input value={area} type="number" placeholder="Angle" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Direction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Facing Direction</SelectLabel>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Label>Shading information</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Shading" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Amount of Shading</SelectLabel>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-4">
              <Button>Submit</Button>
              <Button variant={'secondary'}>Clear</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
