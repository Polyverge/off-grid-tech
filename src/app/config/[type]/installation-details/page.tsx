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
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  CloudSun,
  CloudSunRain,
  Fence,
  Footprints,
  House,
  RulerDimensionLine,
  Sun,
} from 'lucide-react';
import { useState } from 'react';

export default function AreaPage() {
  const [area, setArea] = useState(40);
  return (
    <>
      <section id="headeline">
        <h2 className="text-2xl font-bold">Got some room?</h2>
        <h3 className="text-lg">
          Too help us estimate how much solar we can realistically fit on your
          property, we’ll need to know the available space. Since things change
          depending on whether your roof is flat or sloped, please provide the
          roof angle. That helps us fine-tune the setup for maximum efficiency.
        </h3>
      </section>
      <Card className="w-full lg:min-w-[400px]">
        <CardContent>
          <div className="flex flex-col gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Where" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Installation type</SelectLabel>
                  <SelectItem value="sqm">
                    <House /> Roof mounted
                  </SelectItem>
                  <SelectItem value="sqft">
                    <Fence /> Ground mounted
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label>Space avaible</Label>
            <div className="grid grid-cols-6 gap-3">
              <Input
                className="col-span-2"
                value={area}
                type="number"
                onChange={(e) => setArea(Number(e.target.value))}
                placeholder="Area avaible"
              />
              <Select>
                <SelectTrigger className="w-full col-span-4">
                  <SelectValue placeholder="Unit of Measurment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Unit of Measurment</SelectLabel>
                    <SelectItem value="sqm">
                      Square Meters <RulerDimensionLine />
                    </SelectItem>
                    <SelectItem value="sqft">
                      Square Feet <Footprints />
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-8 gap-2">
              <Input
                className="col-span-2"
                value={area}
                type="number"
                placeholder="Angle"
              />
              <Select>
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Facing Direction</SelectLabel>
                    <SelectItem value="north">
                      <ArrowUp /> North
                    </SelectItem>
                    <SelectItem value="east">
                      <ArrowRight />
                      East
                    </SelectItem>
                    <SelectItem value="south">
                      <ArrowDown />
                      South
                    </SelectItem>
                    <SelectItem value="west">
                      <ArrowLeft />
                      West
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Shading" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Amount of Shading</SelectLabel>
                    <SelectItem value="minimal">
                      <Sun className="stroke-orange-400" />
                      Minimal
                    </SelectItem>
                    <SelectItem value="partial">
                      <CloudSun /> Partial
                    </SelectItem>
                    <SelectItem value="heavy">
                      <CloudSunRain />
                      Heavy
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button variant={'secondary'}>Clear</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
