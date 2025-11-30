import { useEffect, useState } from "react";
import RiwayatItem from "../components/RiwayatItem";
import { loadOrders, deleteOrder, updateOrderObj } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import Refund from "../components/Refund"; 

export default function RiwayatPage() {
  const [orders, setOrders] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const navigate = useNavigate();

  
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  
  const [showRefundModal, setShowRefundModal] = useState(false);

  useEffect(() => {
    setOrders(loadOrders());
  }, [refreshKey]);

  const refresh = () => setRefreshKey((k) => k + 1);


  const handlePay = (order) => {
    setSelectedOrder(order);
    setPaymentMethod("");
    setShowPayModal(true);
  };

  const confirmPayment = () => {
    if (!paymentMethod) return alert("Pilih metode pembayaran dahulu!");

    const updated = {
      ...selectedOrder,
      paid: true,
      status: "Sudah dibayar",
      paymentMethod,
    };

    updateOrderObj(updated);
    refresh();
    setShowPayModal(false);
    alert("Pembayaran berhasil (simulasi). Tiket telah lunas.");
  };

  
  const handleEdit = (id) => {
    navigate("/pesan", { state: { editId: id } });
  };

  const handleDelete = (id) => {
    if (!confirm("Yakin ingin menghapus pesanan ini?")) return;
    deleteOrder(id);
    refresh();
  };

  
  const handleRefund = (order) => {
    setSelectedOrder(order);
    setShowRefundModal(true);
  };

  const confirmRefund = (reason) => {
  const updated = {
    ...selectedOrder,
    status: "Refund Berhasil",
    refunded: true,
    refundReason: reason,

    
    paid: false,
  };

  updateOrderObj(updated);
  refresh();
  setShowRefundModal(false);

  alert("Refund berhasil diajukan.");
};


  
  if (!orders || orders.length === 0) {
    return (
      <section className="min-h-screen py-20 text-center text-gray-600">
        <p>Belum ada pemesanan.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F5F7FC] py-14">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold mb-5 text-blue-800">
          Riwayat Pemesanan Tiket
        </h2>

        {orders.map((o) => (
          <RiwayatItem
            key={o.id}
            o={o}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPay={() => handlePay(o)}
            onRefund={() => handleRefund(o)}
          />
        ))}
      </div>

      {/* PEMBAYARAN  */}
      {showPayModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[420px] rounded-xl shadow-lg p-6 space-y-4 animate-fadeIn">
            <h3 className="text-xl font-bold text-blue-700">Pembayaran Tiket</h3>
            <p className="text-sm text-gray-600">
              Total Pembayaran:{" "}
              <span className="font-semibold text-green-700">
                {selectedOrder.total}
              </span>
            </p>

            <div className="space-y-2">
              <p className="text-sm font-medium">Pilih Metode Pembayaran:</p>

              <select
                className="w-full border rounded-lg p-2"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">-- Pilih --</option>

                <optgroup label="Bank Transfer">
                  <option value="BCA">Bank BCA</option>
                  <option value="BRI">Bank BRI</option>
                  <option value="BNI">Bank BNI</option>
                  <option value="Mandiri">Bank Mandiri</option>
                </optgroup>

                <optgroup label="E-Wallet">
                  <option value="GoPay">GoPay</option>
                  <option value="Dana">Dana</option>
                  <option value="OVO">OVO</option>
                  <option value="ShopeePay">ShopeePay</option>
                </optgroup>

                <optgroup label="QRIS">
                  <option value="QRIS">QRIS</option>
                </optgroup>
              </select>
            </div>

            {paymentMethod && (
              <div className="p-4 bg-gray-100 rounded-lg border mt-3">
                <p className="font-medium text-sm mb-2">
                  Informasi Pembayaran:
                </p>

                {paymentMethod === "BCA" && <p>VA BCA: <b>0149876543210</b></p>}
                {paymentMethod === "BRI" && <p>VA BRI: <b>0023456789012</b></p>}
                {paymentMethod === "BNI" && <p>VA BNI: <b>0098765432101</b></p>}
                {paymentMethod === "Mandiri" && <p>VA Mandiri: <b>0081234567890</b></p>}

                {paymentMethod === "GoPay" && <p>No GoPay: <b>081234567890</b></p>}
                {paymentMethod === "Dana" && <p>No Dana: <b>081998877665</b></p>}
                {paymentMethod === "OVO" && <p>No OVO: <b>081223344556</b></p>}
                {paymentMethod === "ShopeePay" && <p>No ShopeePay: <b>081577788899</b></p>}

                {paymentMethod === "QRIS" && (
                  <div className="text-center">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=SIMULASI-PEMBAYARAN-QRIS"
                      className="w-48 mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-xs mt-2 text-gray-600">
                      Scan QRIS untuk melakukan pembayaran.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-3">
              <button
                onClick={() => setShowPayModal(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Batal
              </button>

              <button
                onClick={confirmPayment}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
              >
                Konfirmasi Pembayaran
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REFUND  */}
      {showRefundModal && selectedOrder && (
        <Refund
          order={selectedOrder}
          onCancel={() => setShowRefundModal(false)}
          onSubmit={(reason) => confirmRefund(reason)}
        />
      )}
    </section>
  );
}