import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Dimensions } from "react-native";
import stylest from "../../styles/globalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from "@react-native-community/slider"; 

const { height } = Dimensions.get("window");
function ReadChapter ({navigation}) {
    const scrollRef = useRef(null); // Tham chiếu tới ScrollView
    const [scrollPosition, setScrollPosition] = useState(0); // Lưu giá trị slider

    const handleSliderChange = (value) => {
        setScrollPosition(value);
        if (scrollRef.current) {
        scrollRef.current.scrollTo({
            y: value * (contentHeight - height + 150), // Điều chỉnh y dựa trên tỷ lệ
            animated: false,
        });
        }
    };

  const [contentHeight, setContentHeight] = useState(1); // Chiều cao nội dung cuộn
    return (
        <View style={{ flex: 1 }}>
            <View style={stylest.headerCard}>
                <View style={stylest.item}>
                    <TouchableOpacity onPress={() => navigation.navigate('cardstory')}>
                        <Icon name="close" size={24} color="rgba(0,0,0,0.5)" />
                    </TouchableOpacity>
                    <View style={styles.stage}>
                        <Text style={styles.readTitle}>Chương 17: Hoàn</Text>
                        <View style={styles.stageTime}>
                            <Text style={styles.readChapter}>17/17</Text> 
                            <Text style={styles.readTime}> • 7 th 11, 2024</Text> 
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[stylest.item, styles.repeat]}>
                    <Icon style={stylest.icon} name="repeat"/>
                </TouchableOpacity>
            </View>
            <ScrollView  ref={scrollRef}
                onContentSizeChange={(width, height) => setContentHeight(height)}>
                <View style={styles.container}>
        
                    <Text style={styles.textContent}>
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân.
                        Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga.
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân. Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga.
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân. Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga. 
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân. Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga. 
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân. Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga. 
                        Nguyên tắc cơ bản của học thuyết là sử dụng vũ khí hạt nhân là biện pháp cuối cùng để bảo vệ chủ quyền đất nước. Văn kiện nêu rõ việc xuất hiện các nguy cơ và mối đe dọa quân sự mới buộc Nga phải làm rõ điều kiện sử dụng vũ khí hạt nhân. Ngoài ra, văn kiện nêu rõ Nga sẽ xem mọi cuộc tấn công của một nước không có vũ khí hạt nhân nhưng được hỗ trợ bởi một cường quốc hạt nhân là một cuộc tấn công chung.
                        Nga cũng bảo lưu quyền xem xét đáp trả hạt nhân đối với một cuộc tấn công bằng vũ khí quy ước đe dọa chủ quyền của mình, việc phóng quy mô lớn máy bay, tên lửa và thiết bị không người lái nhằm vào lãnh thổ Nga, việc chúng vượt qua biên giới Nga hay một cuộc tấn công đồng minh Belarus.
                        Động thái của Nga gây ra nhiều sự chú ý. Phiên bản trước của học thuyết hạt nhân này được phê chuẩn tháng 6/2020, thay thế văn kiện tương tự đã có hiệu lực trong 10 năm. Ông Dmitry Peskov - Phát ngôn viên Điện Kremlin thừa nhận rằng tài liệu mới được công bố sẽ "trải qua quá trình phân tích chuyên sâu ở cả Nga và nước ngoài".
                        Theo hãng thông tấn TASS, sự xuất hiện của các mối đe dọa quân sự và rủi ro mới đã buộc Nga phải điều chỉnh các điều kiện sử dụng vũ khí hạt nhân. Được biết, ATACMS và Storm Shadow có tầm bắn lên tới 300km. Đến nay, đây được coi là những tên lửa mạnh nhất mà phương Tây cung cấp cho Ukraine. Tuy vậy, hiện Mỹ, Anh chưa xác nhận thông tin Ukraine sử dụng ATACMS và Storm Shadow vào lãnh thổ Nga.  
                    </Text>

                </View>
            </ScrollView>
            <View style={[stylest.footer, styles.footer]}>
                <TouchableOpacity style={styles.settingChapter} onPress={() => navigation.navigate('Home')}>
                    <Icon  name='arrow-left' style={stylest.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingChapter} onPress={() => navigation.navigate('Home')}>
                    <Icon  name='gear' style={stylest.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingChapter} onPress={() => navigation.navigate('Home')}>
                    <Icon  name='play-circle-o' style={stylest.icon}/>
                </TouchableOpacity>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={scrollPosition}
                    onValueChange={handleSliderChange}
                    minimumTrackTintColor="#1FB6FF"
                    maximumTrackTintColor="rgba(0,0,0,0.8)"
                    thumbTintColor="#1FB6FF"
                    />
                <TouchableOpacity  style={styles.settingChapter}>
                    <Icon  name='headphones' style={stylest.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('listchapter')} style={styles.settingChapter}>
                    <Icon  name='bars' style={stylest.icon}/>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.settingChapter}>
                    <Icon  name='arrow-right' style={stylest.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    stage: {
        marginLeft: 20,
    },
    stageTime: {
        flexDirection: 'row',
    },
    readTitle: {
        fontSize: 15,
    },
    readChapter: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
    },
    readTime: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
    },
    repeat: {
        marginRight: 10,
    },
    textContent: {
        width: '100%',
        fontSize: 20,
        lineHeight: 35,
        letterSpacing: 1,
        textAlign: 'justify',
    },
    footer: {
        paddingHorizontal: 10,
    },
    slider: {
        width: 100,
        height: 40,
        paddingHorizontal: 5,
    },
    settingChapter: {
        paddingHorizontal: 5,
    }
})
export default ReadChapter;