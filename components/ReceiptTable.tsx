const nfts = [
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
  {
    id: '0x0',
    name: 'Woodies',
    amount: '0',
  },
]

const ReceiptTable = () => {
  return (
    <table className="font-serif w-full leading-4">
      <thead>
        <tr className="border-t border-b py-2 border-dashed border-black">
          <th className="text-left">No.</th>
          <th className="text-left">Item</th>
          <th className="text-right">
            Amount <span className="text-xs">⧫</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {nfts.map((nft, index) => (
          <tr key={index}>
            <td className="text-left">{index + 1}</td>
            <td className="text-left">{nft.name}</td>
            <td className="text-right">{nft.amount}</td>
          </tr>
        ))}
        <tr className="border-t border-dashed border-black">
          <td>Item count</td>
          <td></td>
          <td className="text-right">10</td>
        </tr>
        <tr className="border-b border-dashed border-black">
          <td>Total</td>
          <td></td>
          <td className="text-right">
            5 <span className="text-xs">⧫</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ReceiptTable
