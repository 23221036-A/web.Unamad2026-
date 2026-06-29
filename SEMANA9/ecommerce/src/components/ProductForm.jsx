import { useForm } from "react-hook-form";
import { productService } from "../service/productService";

export default function ProductForm({ product, onSave, onCancel }) {
    const { register, handleSubmit } = useForm({
        defaultValues: product,
    });

    const onSubmit = async (data) => {
        const updatedProduct = await productService.update(product.id, data);
        onSave(updatedProduct);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Editar Producto</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                    <input
                        {...register("nombre")}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Precio</label>
                    <input
                        {...register("precio")}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Imagen</label>
                    <input
                        {...register("imagen")}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}