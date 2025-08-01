'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ProductConfiguratorHeadlineWrapper,
  ProductConfiguratorHeadlineMain,
  ProductConfiguratorHeadlineSecondary,
} from '@/features/product/configurator/ui/product-configurator-headlines';
import { handleUserSharingLocation } from '@/features/product/configurator/utils/location';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

export default function LocationPage() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const hasUserLocation = location.latitude !== 0;
  return (
    <>
      <ProductConfiguratorHeadlineWrapper>
        <ProductConfiguratorHeadlineMain>
          Where you at?
        </ProductConfiguratorHeadlineMain>
        <ProductConfiguratorHeadlineSecondary>
          To get a good estimate of how much sunlight you receive throughout the
          year, we'll need to check your location. This helps us determine how
          much solar energy, or other power sources you might need.
        </ProductConfiguratorHeadlineSecondary>
      </ProductConfiguratorHeadlineWrapper>
      <Card className="w-full lg:min-w-[400px]">
        <CardContent>
          <div
            className="w-full h-full min-h-30 bg-gray-200 rounded flex items-center justify-center bg-cover bg-center"
            style={
              hasUserLocation
                ? {
                    backgroundImage:
                      "url('https://picsum.photos/id/212/1280/720')",
                  }
                : {}
            }
          >
            {hasUserLocation ? (
              <div className="backdrop-blur-xs bg-gray-500/40 p-7 rounded">
                <p className="font-bold">You live in:</p>
                <p className="text-primary">Berlepschstraße 6</p>
                <p className="text-primary">34119 Kassel, Germany</p>
              </div>
            ) : (
              <MapPin
                fill="#d45252"
                stroke={'#000'}
                strokeWidth={0.5}
                size={80}
              />
            )}
          </div>
          <Button
            className="mt-6"
            onClick={() => handleUserSharingLocation(setLocation)}
          >
            Share loction <MapPin />
          </Button>
          <div className="flex items-center my-5 flex-1">
            <div className="h-0.5 flex-1 bg-gray-500" />
            <Label className="mx-5">Or</Label>
            <div className="h-0.5 flex-1 bg-gray-500" />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Address</Label>
            <div className="grid grid-cols-6 gap-2">
              <Input className="col-span-4" placeholder="Street" />
              <Input className="col-span-2" placeholder="No." />
            </div>
            <div className="grid grid-cols-6 gap-2">
              <Input className="col-span-2" placeholder="ZIP Code" />
              <Input className="col-span-4" placeholder="Country" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            <Button variant={'secondary'}>Clear</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}