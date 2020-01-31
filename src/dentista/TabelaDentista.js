import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th colSpan="2">Ações</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {

    const dentistas = props.dentistas.map(dentista => {
        return (
            <tr key={dentista.codigo}>
                <td>{dentista.codigo}</td>
                <td>{dentista.nome}</td>
                <td>{dentista.telefone}</td>
                <td><button>EDITAR</button></td>
                <td><button>EXCLUIR</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {dentistas}
        </tbody>
    );
}

class TabelaDentista extends Component {
    render() {

        const { dentistas } = this.props;
        console.log(dentistas);


        return (
            <div>
                <h1>Lista de Dentistas</h1>
                <table>
                    <TableHead />
                    <TableBody dentistas={dentistas} />
                </table>
            </div>
        );
    }
}

export default TabelaDentista;