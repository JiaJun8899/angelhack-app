import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
interface Reward {
  heading: string;
  description: string;
  points: number;
}

const rewardsData = [
    {
      heading: 'NTUC Voucher - $5',
      description: 'Redeem this voucher for $5 off your purchase at NTUC FairPrice outlets.',
      points: 500,
    },
    {
      heading: 'NTUC Voucher - $10',
      description: 'Redeem this voucher for $10 off your purchase at NTUC FairPrice outlets.',
      points: 1000,
    },
    {
      heading: 'Mr Bean Voucher - $5',
      description: 'Redeem this voucher for $5 worth of items at any Mr Bean outlet.',
      points: 400,
    },
    {
      heading: 'Mr Bean Voucher - $10',
      description: 'Redeem this voucher for $10 worth of items at any Mr Bean outlet.',
      points: 800,
    },
  ];

const RewardsPage: React.FC = () => {
  return (
    <div className="p-6 w-full text-center mb-24">
      <h2 className="text-2xl font-bold mb-6">Rewards</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {rewardsData.map((reward, index) => (
          <Card key={index} className="mt-6 w-full">
            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">{reward.heading}</Typography>
            <Typography className="text-gray-600 mb-2">{reward.description}</Typography>
            <Typography className="font-medium mb-4">Points needed: {reward.points}</Typography>
            <Button color="blue" fullWidth>Redeem</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RewardsPage;
