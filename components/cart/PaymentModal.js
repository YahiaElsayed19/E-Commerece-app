import { View, Text, Modal, StyleSheet, ScrollView } from "react-native";
import Button from "../UI/Button";
import Input from "../UI/Input";
import TextButton from "../UI/TextButton";
function PaymentModal({ isVisible, onCancel }) {
    return (
        <Modal visible={isVisible} animationType="slide">
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.head}>Checkout</Text>
                    </View>
                    <View>
                        <Input label="Card number" placeholder="XXXX XXXX XXXX XXXX" />
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{ width: "48%" }}>
                                <Input label="CVC/CVV" placeholder="XXX" />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input label="Expiry date" placeholder="XX/XX" />
                            </View>
                        </View>
                        <Input label="Phone" placeholder="01XXXXXXXXX" />
                        <Input label="Address" placeholder="Billing address" />
                    </View>
                    <View style={styles.buttons}>
                        <View>
                            <TextButton
                                title="Cancel"
                                style={{ fontSize: 18 }}
                                onPress={onCancel}
                            />
                        </View>
                        <View style={{ width: 120, marginLeft: 12 }}>
                            <Button title="Pay" style={{ marginTop: 0, padding: 8 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
}

export default PaymentModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 30,
    },
    head: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 16,
    },
});
