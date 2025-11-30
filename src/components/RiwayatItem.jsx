// src/components/RiwayatItem.jsx
export default function RiwayatItem({ o, onEdit, onDelete, onPay, onRefund }) {
  // ===== BADGE WARNA & TEKS STATUS =====
  const getStatusBadge = () => {
    if (o.status === "Refund Berhasil") {
      return {
        text: "TELAH DIREFUND",
        color: "bg-yellow-100 text-yellow-700",
      };
    }

    if (o.paid) {
      return {
        text: "LUNAS",
        color: "bg-green-100 text-green-700",
      };
    }

    return {
      text: "BELUM BAYAR",
      color: "bg-red-100 text-red-700",
    };
  };

  const badge = getStatusBadge();

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 relative overflow-hidden">

      {/* Decorative stripe */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-l-xl"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-blue-800">{o.nama}</h3>

        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badge.color}`}>
          {badge.text}
        </span>
      </div>

      {/* Flight route */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Keberangkatan</p>
          <p className="text-lg font-bold">{o.asal}</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">→</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Tujuan</p>
          <p className="text-lg font-bold">{o.tujuan}</p>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Details */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <p><span className="font-semibold">Maskapai:</span> {o.maskapai}</p>
        <p><span className="font-semibold">Kelas:</span> {o.kelas}</p>
        {o.tanggal && <p><span className="font-semibold">Tanggal:</span> {o.tanggal}</p>}
        {o.jam && <p><span className="font-semibold">Jam:</span> {o.jam}</p>}
      </div>

      {/* Total Price */}
      <div className="mt-3 text-right">
        <p className="text-sm text-gray-600">Total</p>
        <p className="text-lg font-bold text-green-700">{o.total}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4">

        
        {!o.paid && o.status !== "Refund Berhasil" && (
          <button
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700"
            onClick={() => onPay(o.id)}
          >
            Bayar
          </button>
        )}

        
        {o.paid && !o.refunded && (
          <button
            className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white shadow hover:bg-red-600"
            onClick={() => onRefund(o)}
          >
            Refund
          </button>
        )}

        {/* EDIT */}
        <button
          className="px-4 py-2 text-sm rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50"
          onClick={() => onEdit(o.id)}
        >
          Edit
        </button>

        {/* HAPUS */}
        <button
          className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
          onClick={() => onDelete(o.id)}
        >
          Hapus
        </button>
      </div>

    </div>
  );
}