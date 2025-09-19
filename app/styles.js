import { StyleSheet } from "react-native";
import { COLORS, SIZES } from './theme';

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
    fontSize: SIZES.fontHeading,
    color: COLORS.greyDark,
    marginTop: 30,
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
  },
  card:{
    backgroundColor: COLORS.background,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: "wrap",
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    elevation: 3,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
 
  cardImage:{
    width: 80,
    height: 80,
    borderRadius: SIZES.borderRadius,
    marginRight: 15,
  },
  cardTitle:{
    fontSize: SIZES.fontMedium,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  cardDescription:{
    fontSize: SIZES.fontSmall,
    color: '#666666',
    lineHeight: 18,
    flexWrap: 'wrap',
  }

});

export default styles