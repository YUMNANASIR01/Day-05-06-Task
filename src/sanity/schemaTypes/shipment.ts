const shipmentSchema = {
  name: 'shipment',
  type: 'document',
  title: 'Shipment',
  fields: [
    {
      name: 'cart',
      type: 'reference',
      to: [{ type: 'cart' }],
      title: 'Cart',
    },
    {
      name: 'trackingNumber',
      type: 'string',
      title: 'Tracking Number',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Shipment Status',
      options: {
        list: [
          { title: 'Preparing', value: 'preparing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
        ],
      },
    },
    {
      name: 'deliveryDate',
      type: 'datetime',
      title: 'Estimated Delivery Date',
    },
  ],
};

export default shipmentSchema;









// export default {
//     name: 'shipment',
//     type: 'document',
//     title: 'Shipment',
//     fields: [
//       {
//         name: 'cart',
//         type: 'reference',
//         to: [{ type: 'cart' }],
//         title: 'Cart',
//       },
//       {
//         name: 'trackingNumber',
//         type: 'string',
//         title: 'Tracking Number',
//       },
//       {
//         name: 'status',
//         type: 'string',
//         title: 'Shipment Status',
//         options: {
//           list: [
//             { title: 'Preparing', value: 'preparing' },
//             { title: 'Shipped', value: 'shipped' },
//             { title: 'Delivered', value: 'delivered' },
//           ],
//         },
//       },
//       {
//         name: 'deliveryDate',
//         type: 'datetime',
//         title: 'Estimated Delivery Date',
//       },
//     ],
//   };
  