import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import {BaseStyles} from '../assets/styles/BaseStyles';
import RenderImage from '../components/Elements/RenderImage';
import RateStar from '../components/Elements/RateStar';
import RateLine from '../components/Elements/RateLine';
import StyledButton from '../components/Elements/StyledButton';
import Comment from '../components/Layout/Comment';
const ChevronDown = require('../assets/icons/chevron-down_dark.png');
const Product1Image = require('../assets/images/products/product_1.png');
const Image1 = require('../assets/images/products/image_1.png');
const Image2 = require('../assets/images/products/image_2.png');
const Image3 = require('../assets/images/products/image_3.png');
const ProductDetailsScreen = () => {
  return (
    <ScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={{flexGrow: 1, paddingBottom: 202}}>
      <View style={{flex: 1}}>
        <View
          style={[
            BaseStyles.flexRowContainer,
            {justifyContent: 'flex-end', marginBottom: 12},
          ]}>
          <Text style={styles.pageTitle}>
            CLINICLAB قناع العناية للتخلص منحب الشباب
          </Text>
        </View>
        <View
          style={[
            BaseStyles.flexColumnContainer,
            styles.productDetailsContainer,
          ]}>
          <View
            style={[
              BaseStyles.flexRowContainer,
              {flexDirection: 'row-reverse'},
            ]}>
            <RenderImage
              src={Product1Image}
              containerStyle={[
                BaseStyles.flexRowContainer,
                {
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            />
            <View
              style={{
                flexWrap: 'wrap',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-end',
                paddingEnd: 12,
              }}>
              <Text style={[styles.productTitle]}>
                CLINICLAB قناع العناية للتخلص منحب الشباب
              </Text>
              <Text style={{color: '#7D7D7D'}}>150ML</Text>
              <View
                style={[
                  BaseStyles.flexRowContainer,
                  {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 5,
                  },
                ]}>
                <Text style={styles.rateValue}>5.0</Text>
                <View style={{paddingHorizontal: 4}}>
                  <Text style={styles.rateCount}>(250)</Text>
                </View>
                <RateStar value={4.5} />
              </View>
              <View
                style={[
                  BaseStyles.flexRowContainer,
                  {flexDirection: 'row-reverse', paddingTop: 7},
                ]}>
                <Text style={styles.productPrice}>$35,00</Text>
                <View style={{paddingHorizontal: 4}}>
                  <Text style={styles.originalPrice}>$50,70</Text>
                </View>
                <Text style={styles.discountValue}>%22</Text>
              </View>
            </View>
          </View>
          <RateLine values={[20, 30, 50, 200, 700]} />
        </View>
        <View
          style={[
            BaseStyles.flexRowContainer,
            {
              justifyContent: 'space-between',
              paddingTop: 17,
              paddingBottom: 32,
            },
          ]}>
          <StyledButton title="الذهاب للمنتج" />
          <StyledButton title="فرز حسب النتيجة" outlined icon={ChevronDown} />
        </View>
        <Comment
          title="ت*** أ***"
          review={5.0}
          date={new Date()}
          comment="السيروم ممتاز شكد ما احجي وأقول مارح أنطيه حقه. من أول استخدام لاحظت النتيجة وجانت نتيجة ممتازة. اني بشرتي حساسة وهواية منتجات ما نجحت وياية بس هذا السيروم نجح مباشرة وجانت عنده تأثير جبير بتهدئة بشرتي وزاد من نضارتها."
        />
        <Comment
          title="ت*** أ***"
          review={5.0}
          date={new Date()}
          comment="السيروم ممتاز شكد ما احجي وأقول مارح أنطيه حقه. من أول استخدام لاحظت النتيجة وجانت نتيجة ممتازة. اني بشرتي حساسة وهواية منتجات ما نجحت وياية بس هذا السيروم نجح مباشرة وجانت عنده تأثير جبير بتهدئة بشرتي وزاد من نضارتها."
          attachments={[Image1, Image2, Image3]}
        />
        <Comment
          title="ت*** أ***"
          review={4.0}
          date={new Date()}
          comment="السيروم ممتاز شكد ما احجي وأقول مارح أنطيه حقه. من أول استخدام لاحظت النتيجة وجانت نتيجة ممتازة. اني بشرتي حساسة وهواية منتجات ما نجحت وياية بس هذا السيروم نجح مباشرة وجانت عنده تأثير جبير بتهدئة بشرتي وزاد من نضارتها."
          attachments={[Image3, Image1, Image2]}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  scrollViewStyle: {
    padding: 16,
    paddingTop: 92,
    backgroundColor: '#ffffff',
  },
  pageTitle: {
    color: '#7D7D7D',
    fontSize: 14,
  },
  productDetailsContainer: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  productTitle: {
    color: '#100F0F',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
  },
  packageSize: {
    color: '#7D7D7D',
    fontSize: 12,
  },
  rateValue: {
    color: '#100F0F',
    fontSize: 16,
    fontWeight: '500',
  },
  rateCount: {
    color: '#AAAAAA',
    fontSize: 12,
    fontFamily: 'Inter',
  },
  productPrice: {
    color: '#100F0F',
    fontSize: 14,
    fontFamily: 'Tajawal',
    fontWeight: '500',
  },
  originalPrice: {
    color: '#C1CACA',
    fontSize: 14,
    fontFamily: 'Tajawal',
    fontWeight: '500',
  },
  discountValue: {
    color: '#3FA796',
    fontSize: 14,
    fontFamily: 'Tajawal',
    fontWeight: '700',
  },
});
