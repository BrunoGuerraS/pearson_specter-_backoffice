import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#65c465', // Color fijo para la barra de progreso
    },
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: 'white', // Color de fondo de la barra de progreso
    },
}));
