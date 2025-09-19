import { StyleSheet} from "react-native";
import {COLORS, SIZES} from './theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.background
  },
  text:{
    color: COLORS.text,
  },
  header:{
    backgroundColor: COLORS.greyLight,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginBottom: 25,

  },
  title:{
    fontSize: SIZES.fontTitle,
    color: COLORS.greyDark,
    fontWeight: 500,
  },
  heading:{
    fontSize: SIZES.fontHeading
  },
  button:{
    backgroundColor: COLORS.purpleLight,
    padding: 15,
    borderRadius: SIZES.borderRadius,
  },
  buttonText: {
    color: COLORS.purpleDark,
    fontSize: SIZES.fontMedium,
  },
  controls:{
    flexDirection: "row",
    gap: 25,
  }
});

export default styles