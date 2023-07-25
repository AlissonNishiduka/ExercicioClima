import { Box, Cloud, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Star, Sun, Wind, Zap } from 'react-feather'
export const IconsWeather = ({ icon }) => {

    const icons = {
      0: <CloudLightning size={80}></CloudLightning>,
      1: <CloudLightning size={80}></CloudLightning>,
      2: <Cloud size={80}></Cloud>,
      3: <CloudLightning size={80}></CloudLightning>,
      4: <CloudLightning size={80}></CloudLightning>,
      5: <CloudSnow size={80}></CloudSnow>,
      6: <CloudSnow size={80}></CloudSnow>,
      7: <CloudSnow size={80}></CloudSnow>,
      8: <CloudDrizzle size={80}></CloudDrizzle>,
      9: <CloudDrizzle size={80}></CloudDrizzle>,
      10: <CloudSnow size={80}></CloudSnow>,
      11: <CloudDrizzle size={80}></CloudDrizzle>,
      12: <CloudDrizzle size={80}></CloudDrizzle>,
      13: <CloudDrizzle size={80}></CloudDrizzle>,
      14: <Wind size={80}></Wind>,
      15: <Wind size={80}></Wind>,
      16: <CloudSnow size={80}></CloudSnow>,
      17: <CloudSnow size={80}></CloudSnow>,
      18: <Box size={80}></Box>,
      19: <Wind size={80}></Wind>,
      20: <Cloud size={80}></Cloud>,
      21: <Wind size={80}></Wind>,
      22: <Wind size={80}></Wind>,
      23: <Wind size={80}></Wind>,
      24: <Wind size={80}></Wind>,
      25: <CloudSnow size={80}></CloudSnow>,
      26: <Cloud size={80}></Cloud>,
      27: <Sun size={80}></Sun>,
      28: <Cloud size={80}></Cloud>,
      29: <Cloud size={80}></Cloud>,
      30: <Cloud size={80}></Cloud>,
      31: <CloudOff size={80}></CloudOff>,
      32: <Sun size={80}></Sun>,
      33: <Star size={80}></Star>,
      34: <Cloud size={80}></Cloud>,
      35: <CloudRain size={80}></CloudRain>,
      36: <Wind size={80}></Wind>,
      37: <Zap size={80}></Zap>,
      38: <Zap size={80}></Zap>,
      39: <Zap size={80}></Zap>,
      40: <CloudRain size={80}></CloudRain>,
      41: <CloudSnow size={80}></CloudSnow>,
      42: <CloudRain size={80}></CloudRain>,
      43: <CloudSnow size={80}></CloudSnow>,
      44: <Sun size={80}></Sun>,
      45: <CloudRain size={80}></CloudRain>,
      46: <CloudSnow size={80}></CloudSnow>,
      47: <Zap size={80}></Zap>,
      48: <CloudOff size={80}></CloudOff>,
    };


    return (
        <div>
           {icons[icon]}
        </div>
    );
 }