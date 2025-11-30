import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('Tan(');
  const [mode, setMode] = useState('DEG');

  const handlePress = (value: string) => {
    setDisplay(prev => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>NORM MATH DECI</Text>
      </View>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      {/* Calculator Buttons */}
      <ScrollView style={styles.buttonContainer}>
        {/* Top Control Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuBtn}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.proBtn}>
            <Text style={styles.proBtnText}>⚡PRO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>Σ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>⚙</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>⊘</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBtn, styles.degBtn]}>
            <Text style={styles.degText}>DEG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreBtn}>
            <Text style={styles.moreText}>MORE</Text>
          </TouchableOpacity>
        </View>

        {/* Function Keys Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.shiftBtn}>
            <Text style={styles.shiftText}>SHIFT</Text>
            <Text style={styles.subText}>SOLVE ≡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alphaBtn}>
            <Text style={styles.alphaText}>ALPHA</Text>
            <Text style={styles.subText}>d/dx :</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.arrowText}>◄</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.arrowText}>►</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>MODE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>2nd</Text>
            <Text style={styles.subTextSmall}>x! Σ ∐</Text>
          </TouchableOpacity>
        </View>

        {/* Function Keys Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>CALC</Text>
            <Text style={styles.subTextYellow}>ˣ√ʸ +R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>∫dx</Text>
            <Text style={styles.subTextYellow}>³√x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>▲</Text>
            <Text style={styles.subTextYellow}>mod</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>▼</Text>
            <Text style={styles.subTextYellow}>x√y</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>x⁻¹</Text>
            <Text style={styles.subTextSmall}>10ˣ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>
              Log<Text style={styles.subscript}>x</Text>y
            </Text>
            <Text style={styles.subTextSmall}>eˣ t</Text>
          </TouchableOpacity>
        </View>

        {/* Function Keys Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>x</Text>
            <Text style={styles.whiteText}>y</Text>
            <Text style={styles.subTextYellow}>∠</Text>
            <Text style={styles.subTextBlue}>a</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>√x</Text>
            <Text style={styles.subTextYellow}>FACT</Text>
            <Text style={styles.subTextBlue}>b</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>x²</Text>
            <Text style={styles.subTextYellow}>x</Text>
            <Text style={styles.subTextBlue}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>xʸ</Text>
            <Text style={styles.subTextYellow}>Sin⁻¹</Text>
            <Text style={styles.subTextBlue}>d</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Log</Text>
            <Text style={styles.subTextYellow}>Cos⁻¹</Text>
            <Text style={styles.subTextBlue}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Ln</Text>
            <Text style={styles.subTextYellow}>Tan⁻¹</Text>
            <Text style={styles.subTextBlue}>f</Text>
          </TouchableOpacity>
        </View>

        {/* Function Keys Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>(-)</Text>
            <Text style={styles.subTextYellow}>STO CLRv</Text>
            <Text style={styles.subTextBlue}>i</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>°'"</Text>
            <Text style={styles.subTextBlue}>Cot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>hyp</Text>
            <Text style={styles.subTextYellow}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Sin</Text>
            <Text style={styles.subTextYellow}>Cot⁻¹ ,</Text>
            <Text style={styles.subTextBlue}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Cos</Text>
            <Text style={styles.subTextSmall}>x→y</Text>
            <Text style={styles.subTextBlue}>y</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Tan</Text>
            <Text style={styles.subTextYellow}>M- m</Text>
          </TouchableOpacity>
        </View>

        {/* Function Keys Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>RCL</Text>
            <Text style={styles.subTextYellow}>CONST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>ENG</Text>
            <Text style={styles.subTextYellow}>CONV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>(</Text>
            <Text style={styles.subTextBlue}>SI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>)</Text>
            <Text style={styles.subTextYellow}>Limit</Text>
            <Text style={styles.subTextBlue}>∞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>S⇄D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>M+</Text>
            <Text style={styles.subTextYellow}>CLR ALL</Text>
          </TouchableOpacity>
        </View>

        {/* Number Pad Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>7</Text>
            <Text style={styles.subTextYellow}>MATRIX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>8</Text>
            <Text style={styles.subTextYellow}>VECTOR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>9</Text>
            <Text style={styles.subTextYellow}>FUNC</Text>
            <Text style={styles.subTextBlue}>HELP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>⌫</Text>
            <Text style={styles.subTextSmall}>nPr</Text>
            <Text style={styles.subTextBlue}>GCD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acBtn}>
            <Text style={styles.acBtnText}>AC</Text>
            <Text style={styles.subTextSmall}>nCr</Text>
            <Text style={styles.subTextBlue}>LCM</Text>
          </TouchableOpacity>
        </View>

        {/* Number Pad Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>4</Text>
            <Text style={styles.subTextYellow}>STAT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>5</Text>
            <Text style={styles.subTextYellow}>CMPLX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>6</Text>
            <Text style={styles.subTextYellow}>DISTR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>×</Text>
            <Text style={styles.subTextSmall}>Pol</Text>
            <Text style={styles.subTextBlue}>Ceil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>÷</Text>
            <Text style={styles.subTextSmall}>Rec</Text>
            <Text style={styles.subTextBlue}>Floor</Text>
          </TouchableOpacity>
        </View>

        {/* Number Pad Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>1</Text>
            <Text style={styles.subTextYellow}>COPY</Text>
            <Text style={styles.subTextBlue}>PASTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>2</Text>
            <Text style={styles.subTextYellow}>Ran#</Text>
            <Text style={styles.subTextBlue}>RanInt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>3</Text>
            <Text style={styles.subTextYellow}>π</Text>
            <Text style={styles.subTextBlue}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>+</Text>
            <Text style={styles.subTextBlue}>PreAns</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>−</Text>
            <Text style={styles.subTextYellow}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Number Pad Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Exp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.whiteText}>Ans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBtn}>
            <Text style={styles.operatorText}>=</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    backgroundColor: '#1a1a1a',
    padding: 8,
    alignItems: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  display: {
    backgroundColor: '#c5d9d9',
    padding: 20,
    minHeight: 120,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  displayText: {
    color: '#d32f2f',
    fontSize: 36,
    fontWeight: '400',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  menuBtn: {
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 6,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 20,
  },
  proBtn: {
    backgroundColor: '#7c4dff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  proBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconBtn: {
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 6,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
  },
  degBtn: {
    borderColor: '#4a4a4a',
    borderWidth: 1,
  },
  degText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  moreBtn: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#7c4dff',
    borderWidth: 1,
  },
  moreText: {
    color: '#7c4dff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  shiftBtn: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    minHeight: 50,
  },
  shiftText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  alphaBtn: {
    backgroundColor: '#9c27b0',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    minHeight: 50,
  },
  alphaText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ffeb3b',
    fontSize: 9,
    marginTop: 2,
  },
  subTextYellow: {
    color: '#ffeb3b',
    fontSize: 8,
    marginTop: 1,
  },
  subTextBlue: {
    color: '#64b5f6',
    fontSize: 8,
    marginTop: 1,
  },
  subTextSmall: {
    color: '#888',
    fontSize: 7,
    marginTop: 1,
  },
  darkBtn: {
    backgroundColor: '#3a3a3a',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  arrowText: {
    color: '#fff',
    fontSize: 20,
  },
  subscript: {
    fontSize: 9,
  },
  numberText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
  operatorText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
  },
  deleteBtn: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  acBtn: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acBtnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Calculator;
