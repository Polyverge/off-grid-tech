'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ProductConfiguratorHeadlineWrapper, ProductConfiguratorHeadlineMain, ProductConfiguratorHeadlineSecondary } from '@/features/product/configurator/ui/product-configurator-headlines';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

export default function EnergyUsagePage() {
  const [area, setArea] = useState('');
  return (
    <>
      <ProductConfiguratorHeadlineWrapper>
        <ProductConfiguratorHeadlineMain>Got some room?</ProductConfiguratorHeadlineMain>
        <ProductConfiguratorHeadlineSecondary>
            Too help us estimate how much solar we can realistically fit on your
            property, we’ll need to know the available space. Since things change
            depending on whether your roof is flat or sloped, please provide the
            roof angle. That helps us fine-tune the setup for maximum efficiency.
            </ProductConfiguratorHeadlineSecondary>
      </ProductConfiguratorHeadlineWrapper>
      <Card className="w-full lg:min-w-[400px]">
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label>Space avaible</Label>
            <div className="grid grid-cols-6 gap-3">
              <Input
                className="col-span-2"
                value={area}
                type="number"
                min={0}
                max={90}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Area avaible"
              />
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
