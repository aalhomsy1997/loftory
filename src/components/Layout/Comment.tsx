import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseStyles} from '../../assets/styles/BaseStyles';
import RateStar from '../Elements/RateStar';
import RenderImage from '../Elements/RenderImage';
import {CommentProps} from '../types/Layout/CommentProps';

const Comment = ({title, review, date, comment, attachments}: CommentProps) => {
  return (
    <View style={[BaseStyles.flexColumnContainer, {paddingBottom: 16}]}>
      <View
        style={[
          BaseStyles.flexRowContainer,
          {flexDirection: 'row-reverse', alignItems: 'center'},
        ]}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 100,
            backgroundColor: '#3FA796',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#ffffff'}}>{title[0]}</Text>
        </View>
        <View style={{flex: 1, paddingEnd: 10}}>
          <View
            style={[BaseStyles.flexColumnContainer, {alignItems: 'flex-end'}]}>
            <Text>{title}</Text>
            <View
              style={[
                BaseStyles.flexRowContainer,
                {flexDirection: 'row-reverse', alignItems: 'center'},
              ]}>
              <RateStar value={review} />
              <Text style={{paddingEnd: 7, color: '#7D7D7D'}}>
                {review.toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color: '#7D7D7D'}}>{date.toLocaleDateString()}</Text>
        </View>
      </View>
      {attachments && attachments?.length > 0 && (
        <View
          style={[
            BaseStyles.flexRowContainer,
            {justifyContent: 'flex-end', flexWrap: 'wrap'},
          ]}>
          {attachments.map(item => (
            <RenderImage
              src={item}
              containerStyle={{paddingStart: 8, paddingTop: 8}}
            />
          ))}
        </View>
      )}
      <View style={{paddingTop: 8}}>
        <Text style={{color: '#000000', textAlign: 'right'}}>{comment}</Text>
      </View>
    </View>
  );
};

export default Comment;
