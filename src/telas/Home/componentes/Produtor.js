import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // esta propriedade funciona apenas no Android
        elevation: 4,

        // estas propriedades são para aplicar a sombra no iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
});

export default function Produtor({nome, imagem, distancia, estrelas}) {
    return (
        <View style={estilos.cartao}>
            <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
            <View style={estilos.informacoes}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.distancia}>{distancia}</Text>
            </View>
        </View>
    );
}
