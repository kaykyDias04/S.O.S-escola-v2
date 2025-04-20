import React, { useState } from "react";

type TipoDeReclamacao = 'assedio moral' | 'xigamento' | 'violencia' | 'discriminacao' | 'outro' | '';

interface ReclamacaoFormsData { 
    tipoDeReclamacao: TipoDeReclamacao;
    ehanonimo: boolean;
    nome: string;
    email: string;
    celular: string;
    descricao: string;
    aceitoDeTermos: boolean;
}

export function useForms(initialState?: Partial<ReclamacaoFormsData>) {
    const [formData, setFormData] = useState<ReclamacaoFormsData>({    
        tipoDeReclamacao: '',
        ehanonimo: true,
        nome: '',
        email: '',
        celular: '',
        descricao: '',
        aceitoDeTermos: false,
        ...initialState
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target;
        const value = target.type === 'checkbox' 
            ? (target as HTMLInputElement).checked 
            : target.value;
        
        setFormData(prev => ({
            ...prev,
            [target.name]: value
        }));
    };
    const resetForm = () => {
        setFormData({
        tipoDeReclamacao: '',
        ehanonimo: true,
        nome: '',
        email: '',
        celular: '',
        descricao: '',
        aceitoDeTermos: false
        });
        };

        return{
            formData,
handleInputChange,
resetForm,
setFormData
        };
    }