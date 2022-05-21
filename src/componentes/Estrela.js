import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    },
});

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        } else {
            return estrelaCinza;
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}
        >
            <Image source={getImagem()} style={estilos.estrela} />
        </TouchableOpacity>
    )
}
