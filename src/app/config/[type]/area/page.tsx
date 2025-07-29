'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
          To get a good estimate of how much solar we can fit on your roof we
          need to area avaible. This helps to find the optimal panel sizes
          required for your needs. Since it different if you have a flat roof or
          an angle please also provide the angle of the roof.
        </h3>
      </section>
      <div className="w-full">
        <Card>
          <CardHeader>Area for solar</CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input value={area} type="number" placeholder="Area avaible" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Unit of Measurement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Unit</SelectLabel>
                      <SelectItem value="sqm">Square Meters</SelectItem>
                      <SelectItem value="sqft">Square Feet</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Input value={area} type="number" placeholder="Angle" />
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
