import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Good Morning Guys</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold"></ThemedText>.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My Name is Mushrat Khan</ThemedText>
        <ThemedText>
          This is the first Page  in React Native devlopment..
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 600,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
