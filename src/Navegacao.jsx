export default function Navegacao() {
    return <div className="navegacao">
        <input type="radio" id="pagina-0" name="opcao-pagina" defaultChecked/>
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" id="pagina-1" name="opcao-pagina" />
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" id="pagina-2" name="opcao-pagina" />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}